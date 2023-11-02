# Brewnbeer html biolerplate

This boilerplate provides a set of Gulp tasks to automate your development workflow, tailored specifically for Brewnbeer.

## Installation

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.

## Usage

### Development

To start the development server with live reloading, run:

```bash
gulp serve
```

This will spin up a local server, watch for changes in your source files, and automatically reload the browser.

### Build

To build the project for production, run:

```bash
gulp build
```

This will process and optimize all the necessary files and output them to the `dist` directory.

### Deployment (Firebase)

To deploy the project to Firebase, run:

```bash
gulp deployFirebase
```

This task will execute the Firebase deploy command, making your project live.

## Project Structure

- **src/**
  - **styles/**: Contains SCSS files.
  - **js/**: Contains JavaScript files.
  - **pug/**: Contains Pug templates.
  - **assets/**
    - **fonts/**: Contains font files.
    - **favicons/**: Contains favicon files.
    - **imgs/**: Contains image files.
    - **icons/**: Contains icon files.
- **dist/**: Output directory for compiled files.

## Available Tasks

- `copyFonts`: Copies font files to the output directory.
- `copyFavicons`: Copies favicon files to the output directory.
- `copyImgs`: Copies image files to the output directory.
- `copyAssets`: Copies additional asset folders to the output directory.
- `copyPackageJson`: Copies `package.json` to the output directory.
- `compileSass`: Compiles SCSS files to CSS, autoprefixes, minifies, and renames.
- `bundleJS`: Bundles JavaScript files using Webpack.
- `minifyPug`: Minifies Pug templates.
- `serve`: Starts a local server with live reloading.
- `deployFirebase`: Deploys the project to Firebase.
- `build`: Builds the project for production.
- `default`: Default task that builds the project and starts the server.

### JS

All javascript proceeds with [webpack](https://webpack.js.org/) + [Babel](https://babeljs.io/).

Webpack config localed in `./webpack.{NODE_ENV}.js`.

Babel config located in `./babel.config.js`.

Entrypoint, by default: `./src/js/app.js`.

To directly compile js use command:

```
gulp js
```

[Read webpack docs](https://webpack.js.org/concepts/).

[Read Babel docs](https://babeljs.io/docs/en/).



## License

This project is licensed under the [MIT License](LICENSE).

