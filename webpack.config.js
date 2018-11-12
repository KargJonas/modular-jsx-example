const path = require("path");
const productionMode = process.argv.indexOf("--production") !== -1;

const development = {
  mode: "development",
  entry: "./src/app.js",
  module: {
    rules: [
      {
        use: path.resolve(__dirname, "node_modules/modular-ui-jsx-loader"),
        test: /\.js|\.jsx/
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000
  }
};

const production = {
  mode: "production",
  entry: "./src/app.js",
  module: {
    rules: [
      {
        use: path.resolve(__dirname, "node_modules/modular-ui-jsx-loader"),
        test: /\.js|\.jsx/
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};

module.exports = productionMode ? production : development;