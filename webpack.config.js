const path = require("path");

module.exports = {
    mode: "development",
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "app/dist"),
        compress: true,
        port: 8080
    }
}