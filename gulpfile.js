/*!
 * Gulp SMPL Layout Builder
 *
 * @version 1.0.0
 * @author Aditya Sutar (Draft)
 * @type Module gulp
 * @license The MIT License (MIT)
 */

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const pug = require("gulp-pug");
const rename = require("gulp-rename");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const connect = require("gulp-connect");
const browserSync = require("browser-sync").create();
const shell = require("gulp-shell");

// Define paths
const paths = {
  src: {
    styles: "src/styles/**/*.scss",
    scripts: ["src/js/**/*.js", "!src/js/**/node_modules/**"],
    pug: "src/pug/**/*.pug",
    fonts: "src/assets/fonts/**/*",
    favicons: "src/assets/favicons/**/*",
    imgs: "src/assets/imgs/**/*",
    additionalAssets: [
      "src/assets/imags/**/*.png",
      "src/assets/imags/**/*.jpg",
      "src/assets/imags/**/*.jpeg",
      "src/assets/imags/**/*.svg",
    ],
    packageJson: "package.json",
  },
  dest: {
    css: "dist/styles",
    js: "dist/js",
    html: "dist",
    fonts: "dist/fonts",
    favicons: "dist",
    imgs: "dist/assets/imgs",
    additionalAssets: "dist/assets",
  },
};

// Copy font files task
gulp.task("copyFonts", function () {
  return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.dest.fonts));
});

// Copy favicon files task
gulp.task("copyFavicons", function () {
  return gulp.src(paths.src.favicons).pipe(gulp.dest(paths.dest.favicons));
});

// Copy img task
gulp.task("copyImgs", function () {
  return gulp.src(paths.src.imgs).pipe(gulp.dest(paths.dest.imgs));
});

// Copy additional asset folders task
gulp.task("copyAssets", function () {
  return gulp
    .src(paths.src.additionalAssets)
    .pipe(gulp.dest(paths.dest.additionalAssets));
});

// Copy package.json to dist task
gulp.task("copyPackageJson", function () {
  return gulp.src(paths.src.packageJson).pipe(gulp.dest(paths.dest.html));
});

// Compile Sass task
gulp.task("compileSass", function () {
  return gulp
    .src(paths.src.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(paths.dest.css))
    .pipe(browserSync.stream());
});

// Bundle JS task
gulp.task("bundleJS", function () {
  return gulp
    .src(["src/js/**/*.js", "!src/js/**/node_modules/**"]) // Exclude the node_modules directory
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Minify pug task
gulp.task("minifyPug", function () {
  return gulp
    .src(paths.src.pug)
    .pipe(pug())
    .pipe(gulp.dest(paths.dest.html))
    .pipe(browserSync.stream());
});

// Serve task
gulp.task("serve", function () {
  connect.server({
    root: "dist",
    livereload: true,
    middleware: function () {
      return [
        function (req, res, next) {
          if (req.url.endsWith(".css")) {
            res.setHeader("Content-Type", "text/css");
          }
          next();
        },
      ];
    },
  });

  browserSync.init({
    proxy: "localhost:8080",
    open: true,
    serveStatic: ["."],
  });

  gulp.watch(paths.src.styles, gulp.series("compileSass"));
  gulp.watch(paths.src.scripts, gulp.series("bundleJS"));
  gulp.watch(paths.src.pug, gulp.series("minifyPug"));
});

// Deploy to Firebase task
gulp.task("deployFirebase", shell.task(["firebase deploy"]));

// Build task
gulp.task(
  "build",
  gulp.series(
    "copyFonts",
    "copyFavicons",
    "copyImgs",
    "copyAssets",
    "copyPackageJson",
    gulp.parallel("compileSass", "bundleJS", "minifyPug")
  )
);

// Default task
gulp.task("default", gulp.series("build", "serve"));
