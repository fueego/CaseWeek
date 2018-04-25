const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//paths that should be cleaned used by CleanWebpackPlugin
let pathToClean = [
    'dist/*.js*',
    'dist/css/*.css'
];

//options for clean
let cleanOptions = {
    beforeEmit: true
};

module.exports = {
    entry: {
        main: glob.sync('./app/js/**/*.js'),
        style: glob.sync('./app/sass/*.scss'),
        vendor: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/angular/angular.js'
        ]
    },
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    
    module: {
        rules: [
            //babel transpiler
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },

            //sass 2 css compilation
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: 'css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: 'postcss-loader' //css prefixer can add support for other webbrowsers like ::-webkit, :-ms-input etc.
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },

            //import html files
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: { minimize: true },
                }
            }
        ]
    },

    //Enable webpack to watch for changes in source files and automatically build.
    devServer: {
        contentBase: './',
        compress: true,
        publicPath: "/dist/",
    },

    plugins: [
        new CleanWebpackPlugin(pathToClean, cleanOptions),
    ],

    //enable source-maps for inspector
    devtool: "source-map",

    mode: 'development',
}