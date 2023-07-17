const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "production", // Set the mode to 'production' or 'development' as needed
  entry: {
    ...getEntryPoints()
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/js") // Adjust the output path as needed
  },
  resolve: {
    alias: {
      gsap: path.resolve(__dirname, "node_modules/gsap/dist/gsap.min.js"), // Update the path to point to your root gsap module
      "smooth-scrollbar": "smooth-scrollbar/dist/smooth-scrollbar.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

function getEntryPoints() {
  const entryPoints = {};
  const files = glob.sync("src/js/**/*.js");

  files.forEach((file) => {
    const entryName = file.replace("src/js/", "").replace(".js", "");
    entryPoints[entryName] = path.resolve(__dirname, file);
  });

  return entryPoints;
}
