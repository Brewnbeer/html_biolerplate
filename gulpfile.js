/*!
 * Gulp SMPL Layout Builder
 *
 * @version 1.0 (lite)
 * @author Aditya Sutar | Brewnbeer
 * @type Module gulp
 * @license The MIT License (MIT)
 */

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const rename = require("gulp-rename");
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const connect = require("gulp-connect");
const browserSync = require("browser-sync").create();

const gsap = require("gsap");

// Copy font files task
gulp.task("copyFonts", function () {
  return gulp
    .src("src/assets/fonts/**/*")
    .pipe(gulp.dest("dist/css/assets/fonts"));
});

// Copy favicon files task
gulp.task("copyFavicons", function () {
  return gulp.src("src/assets/favicons/**/*").pipe(gulp.dest("dist"));
});

// Copy additional asset folders task
gulp.task("copyAssets", function () {
  return gulp
    .src(["src/assets/**/*.png", "src/assets/**/*.svg"])
    .pipe(gulp.dest("dist/assets"));
});

// Copy GSAP files task
gulp.task("copyGSAP", function () {
  return gulp.src("node_modules/gsap/dist/**/*.js").pipe(gulp.dest("dist/js"));
});

// Copy SmoothScrollbar files task
gulp.task("copySmoothScrollbar", function () {
  return gulp
    .src("node_modules/smooth-scrollbar/dist/smooth-scrollbar.js")
    .pipe(gulp.dest("dist/js"));
});

// Compile Sass task
gulp.task("sass", function () {
  return gulp
    .src("src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Bundle JS task
gulp.task("js", function () {
  return gulp
    .src(["src/js/**/*.js", "!src/js/**/node_modules/**"]) // Exclude the node_modules directory
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Minify HTML task
gulp.task("html", function () {
  return gulp
    .src("src/html/**/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("dist"))
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
        }
      ];
    }
  });

  browserSync.init({
    proxy: "localhost:8080",
    open: true,
    serveStatic: ["."]
  });

  gulp.watch("src/styles/**/*.scss", gulp.series("sass"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
  gulp.watch("src/html/**/*.html", gulp.series("html"));
});

// Build task
gulp.task(
  "build",
  gulp.series(
    "copyFonts",
    "copyFavicons",
    "copyAssets",
    "copyGSAP",
    "copySmoothScrollbar",
    gulp.parallel("sass", "js", "html")
  )
);

// Default task
gulp.task("default", gulp.series("build", "serve"));
