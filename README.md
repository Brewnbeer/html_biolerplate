# Brewnbeer - HTML Boilerplate

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub release](https://img.shields.io/badge/release-1.0.0-brightgreen.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2012.0.0-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm-%3E%3D%206.0.0-brightgreen.svg)

HTML Boilerplate is a simple and efficient starting point for web development projects. It provides a Gulp-based build system with tasks for compiling Sass, bundling JavaScript with Webpack, compiling Pug templates, and more.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Tasks](#tasks)
- [License](#license)

## Features

- **Sass Compilation:** Compile and minify Sass files with autoprefixer.
- **JavaScript Bundling:** Bundle JavaScript files using Webpack.
- **Pug Compilation:** Compile Pug templates to HTML.
- **Asset Copying:** Copy fonts, favicons, and additional assets to the `dist` directory.
- **Server and Live Reload:** Serve the project locally with live reloading.
- **HTTP Server:** Start an HTTP server for production-like testing.
- **Clean Task:** Clean the `dist` directory.
- **HTML Prettify:** Prettify HTML files for better readability.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (version >= 12.0.0)
- npm (version >= 6.0.0)
- Gulp CLI (install globally with `npm install -g gulp-cli`)

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/your-username/html_boilerplate.git
cd html_boilerplate
```
2. Install dependencies:

```bash
npm install
```
## Usage

### Development Build

Run the following command to build the project for development and start the development server:

```bash
gulp or npx gulp
```
This will compile Sass, bundle JavaScript, compile Pug, and start a development server with live reloading.


## Tasks

### List of Available Tasks

- **`gulp copyFonts`**: Copy font files to the `dist/fonts` directory.

- **`gulp copyFavicons`**: Copy favicon files to the `dist` directory.

- **`gulp copyAssets`**: Copy additional asset folders to the `dist/assets` directory.

- **`gulp copyPackageJson`**: Copy `package.json` to the `dist` directory.

- **`gulp sassTask`**: Compile Sass files, autoprefix, minify, and rename to `.min.css`.

- **`gulp jsTask`**: Bundle JavaScript files using Webpack.

- **`gulp pugTask`**: Compile Pug templates to HTML.

- **`gulp pug404Task`**: Compile the 404 Pug template to HTML.

- **`gulp serveTask`**: Start a development server with live reloading.

- **`gulp httpServerTask`**: Start an HTTP server for production-like testing.

- **`gulp cleanTask`**: Clean the `dist` directory.

- **`gulp prettifyHtmlTask`**: Prettify HTML files in the `dist` directory.

- **`gulp build`**: Run tasks for a production-ready build.

- **`gulp default`**: Default task that runs the development build and starts the development server.


## License
This project is licensed under the MIT License - see the LICENSE file for details.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Brewnbeer/html_biolerplate/blob/main/LICENSE)



