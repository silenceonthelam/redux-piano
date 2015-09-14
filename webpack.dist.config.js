var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack           = require("webpack");

var autoprefixer = require("autoprefixer-core");

module.exports = {
    entry: [
        "./scripts/index"
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ["babel-loader"],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style",
                "css!sass!autoprefixer?safe=true"
            )
        }]
    },
    output: {
        path: __dirname + "/static/",
        filename: "bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("styles.css")
    ],
    resolve: {
        extensions: ["",".js",".jsx"],
        modulesDirectories: ["node_modules"]
    }
};