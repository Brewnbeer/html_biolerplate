# Brewnbeer HTML/SCSS/CSS Boilerplate

Brewnbeer HTML/SCSS/CSS Boilerplate is a lightweight and customizable boilerplate for developing HTML-based projects with SCSS and CSS. It provides a structured file organization and useful build tasks using Gulp.

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Preconfigured Gulp tasks for compiling SCSS, optimizing CSS, minifying HTML, and bundling JavaScript using Webpack.
- Automatic prefixing of CSS properties for better cross-browser compatibility.
- Live reloading during development using BrowserSync.
- Asset copying for fonts, favicons, and additional assets.
- Integration of popular libraries like GSAP and SmoothScrollbar.

## File Structure

The Brewnbeer boilerplate follows a specific file structure to keep your project organized:
Brewnbeer HTML/SCSS/CSS Boilerplate

```bash
Brewnbeer HTML/SCSS/CSS Boilerplate
├── dist/                 # The distribution folder where compiled and optimized files will be placed.
│   ├── css/              # Compiled CSS files will be placed here.
│   ├── assets/           # Additional CSS assets folder.
│   ├── js/               # Compiled JavaScript files will be placed here.
│   └── index.html        # Main HTML file for distribution.
│
├── src/                  # Source code folder where you will work on your project.
│   ├── assets/           # Folder for various assets used in the project.
│   │   ├── fonts/        # Font files go here.
│   │   ├── favicons/     # Favicon files go here.
│   │   └── ...           # Other asset folders (e.g., images) go here.
│   ├── styles/           # Folder for SCSS files.
│   │   ├── main.scss     # Main SCSS file, all SCSS files will be imported here.
│   │   └── ...           # Other SCSS files go here.
│   ├── js/               # Folder for JavaScript files.
│   │   ├── main.js       # Main JavaScript file, other JS files will be imported here.
│   │   └── ...           # Other JavaScript files go here.
│   ├── html/             # Folder for HTML files.
│   │   ├── index.html    # Main HTML file, other HTML files will be placed here.
│   │   └── ...           # Other HTML files go here.
│   └── ...               # Other folders (e.g., subpages) go here.
│
├── gulpfile.js           # Gulp tasks for task automation.
├── webpack.config.js     # Webpack configuration for bundling JavaScript modules.
├── package.json          # NPM package configuration and dependencies.
├── .gitignore            # Specifies intentionally untracked files to ignore when using Git.
└── README.md             # Project README file containing project details and instructions.

```



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/brewnbeer-boilerplate.git
   ```

2. Change into the project directory:

   ```bash
  cd brewnbeer
   ```
   
3. Install the project dependencies:

   ```bash
   npm install
   ```
 
### Development

To start the development server and watch for changes in SCSS, JavaScript, and HTML files, run the following command:
 ```bash
   gulp
   ```
or
 ```bash
   npx gulp
   ```

# Gulp Tasks

gulp-sass
* Compiles SCSS files, autoprefixes, minifies, and generates CSS files in the dist/css directory.

gulp js
* Bundles JavaScript files using Webpack and outputs the result to the dist/js directory.

gulp html
* Minifies HTML files and copies them to the dist directory.

gulp copyFonts
* Copies font files from the `src/assets/fonts folder` to the `dist/css/assets/fonts` directory.

gulp copyFavicons
* Copies favicon files from the `src/assets/favicons` folder to the dist directory.

gulp copyAssets
* Copies additional asset files (e.g., PNG, SVG) from the `src/assets` folder to the `dist/assets` directory.

gulp copyGSAP
* Copies GSAP library files from `node_modules/gsap/dist` to the `dist/js` directory.

gulp copySmoothScrollbar
* Copies SmoothScrollbar library files from `node_modules/smooth-scrollbar/dist` to the `dist/js` directory.


