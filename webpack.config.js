const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
}