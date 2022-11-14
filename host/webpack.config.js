const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependecies = require('./package.json').dependencies;
const PORT = 3000;

module.exports = {
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        host: `host@http://localhost:3000/remoteEntry.js`,
        team1: `team1@http://localhost:3001/remoteEntry.js`,
        team2: `team2@http://localhost:3002/remoteEntry.js`,
      },
      exposes: {
        "./App": "./src/components/App/index.tsx",
      },
      shared: {
        ...dependecies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependecies.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependecies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: PORT,
    historyApiFallback: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
