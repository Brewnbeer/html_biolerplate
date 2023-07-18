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
├── dist/
│   ├── css/
│   │   └── assets/
│   ├── js/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── favicons/
│   │   └── ...
│   ├── styles/
│   │   ├── main.scss
│   │   └── ...
│   ├── js/
│   │   ├── main.js
│   │   └── ...
│   ├── html/
│   │   ├── index.html
│   │   └── ...
│   └── ...
│
├── gulpfile.js
├── webpack.config.js
├── package.json
├── .gitignore
└── README.md
```



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/brewnbeer-boilerplate.git

