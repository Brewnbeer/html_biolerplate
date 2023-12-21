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
const clean = require("gulp-clean");
const sitemap = require("gulp-sitemap");

// Define paths
const paths = {
  src: {
    styles: "src/styles/**/*.scss",
    scripts: ["src/js/**/*.js", "!src/js/**/node_modules/**"],
    pug: "src/pug/**/*.pug",
    fonts: "src/assets/fonts/**/*",
    favicons: "src/assets/favicons/**/*",
    additionalAssets: [
      "src/assets/**/*.png",
      "src/assets/**/*.jpg",
      "src/assets/**/*.jpeg",
      "src/assets/**/*.svg",
    ],
    packageJson: "package.json",
  },
  dest: {
    css: "dist/styles",
    js: "dist/js",
    html: "dist",
    fonts: "dist/fonts",
    favicons: "dist",
    additionalAssets: "dist/assets",
  },
};

// Copy font files task
function copyFonts() {
  return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.dest.fonts));
}

// Copy favicon files task
function copyFavicons() {
  return gulp.src(paths.src.favicons).pipe(gulp.dest(paths.dest.favicons));
}

// Copy additional asset folders task
function copyAssets() {
  return gulp
    .src(paths.src.additionalAssets)
    .pipe(gulp.dest(paths.dest.additionalAssets));
}

// Copy package.json to dist task
function copyPackageJson() {
  return gulp.src(paths.src.packageJson).pipe(gulp.dest(paths.dest.html));
}

// Compile Sass task
function sassTask() {
  return gulp
    .src(paths.src.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(paths.dest.css))
    .pipe(browserSync.stream());
}

// Bundle JS task
function jsTask() {
  return gulp
    .src(paths.src.scripts)
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(paths.dest.js))
    .pipe(browserSync.stream());
}

// Minify pug task
function pugTask() {
  return gulp
    .src(paths.src.pug)
    .pipe(pug())
    .pipe(gulp.dest(paths.dest.html))
    .pipe(browserSync.stream());
}

// sitemap task
gulp.task("sitemap", () => {
  return gulp
    .src("dist/**/*.html", {
      read: false,
    })
    .pipe(
      sitemap({
        siteUrl: "https://flutterjobs.in",
      })
    )
    .pipe(gulp.dest("dist")); // Change this line to save the sitemap in the 'dist' folder
});

// Serve task
function serveTask() {
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
    server: {
      baseDir: "dist",
    },
    open: true,
  });

  gulp.watch(paths.src.styles, gulp.series(sassTask));
  gulp.watch(paths.src.scripts, gulp.series(jsTask));
  gulp.watch(paths.src.pug, gulp.series(pugTask));
}

// Deploy to Firebase task
const deployFirebase = shell.task(["firebase deploy"]);

// Clean task
function cleanTask() {
  return gulp.src("dist", { read: false, allowEmpty: true }).pipe(clean());
}

// Build task
const build = gulp.series(
  cleanTask,
  gulp.parallel(
    copyFonts,
    copyFavicons,
    copyAssets,
    copyPackageJson,
    sassTask,
    jsTask,
    pugTask,
    "sitemap"
  )
);

// Default task
const defaultTask = gulp.series(build, serveTask);

gulp.task("deploy-firebase", deployFirebase);
gulp.task("clean", cleanTask);
gulp.task("build", build);
gulp.task("default", defaultTask);
