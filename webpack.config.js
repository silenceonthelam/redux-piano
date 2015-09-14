var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer-core");

module.exports = {
    devtool: "source-map",
    entry: [
        "webpack-dev-server/client?http://0.0.0.0:3232",
        "webpack/hot/only-dev-server",
        "./scripts/index"
    ],
    module: {
        // preLoaders: [{
            // test: /\.css$/,
            // loader: 'csslint'
        // },{
            // test: /\.jsx?$/,
            // // define an include so we check just the files we need
            // include: path.resolve(ROOT_PATH, 'app'),
            // loader: 'jshint'
        // }],
        loaders: [{
            test: /\.jsx?$/,
            loaders: ["react-hot","babel-loader"],
            exclude: /node_modules/
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style",
                "css!sass!autoprefixer?safe=true"
            )
        }]
    },
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js",
        publicPath: "/build/"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
    ],
    resolve: {
        extensions: ["",".js",".jsx"]
    }
};

// ./node_modules/.bin/eslint -v

// Note that like some other tools, such as JSCS and JSHint, ESLint supports package.json based configuration. Simply add a eslintConfig field to it and write the configuration there.

// npm run lint --silent
// ELIFECYCLE
// alias run='npm run --silent' unix
// "lint": "eslint . --ext .js --ext .jsx || true"
// The potential problem with this approach is that in case you 
// invoke lint through some other command, it will pass the test 
// even if there are failures! In other words if you have another 
// script that does something like npm run lint && npm run build, 
// it will build regardless of the output of the first command.

// everything
/* eslint-disable */
/* eslint-enable */
// specific rule
/* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
// tweaking a rule
/* eslint no-comma-dangle:1 */
// disable rule per line
// alert('foo'); // eslint-disable-line no-alert