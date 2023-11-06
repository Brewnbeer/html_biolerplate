const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "production",
  entry: { ...getEntryPoints() },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  resolve: {
    extensions: [".js"],
    modules: [path.resolve(__dirname, "src/js"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

function getEntryPoints() {
  const entryPoints = {};
  const files = glob.sync("src/js/**/*.js");

  files.forEach((file) => {
    const entryName = path.basename(file, ".js", "");
    entryPoints[entryName] = path.resolve(__dirname, file);
  });

  return entryPoints;
}
