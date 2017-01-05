"use strict";

const autoprefixer = require('autoprefixer');
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("./src"),

    entry: {//处理入口
        vendor: ["babel-polyfill","jquery"],
        index:["./nm/index.js","./nm/resource/index.less"],
    },

    output: {
        path: path.resolve("./public/assets"),
        publicPath: "/assets/",
        filename: "[name]/bundle.js"
    },

    resolve: {
        extensions: [ "", ".js", ".less" ]
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,            //需要处理的文件
                loaders: [ "babel" ],       //
                include: path.join(__dirname, 'src/')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
            }
        ]
    },

    postcss: [ autoprefixer() ],

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoErrorsPlugin(),

        new webpack.ProvidePlugin({
          $: 'jquery'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity
        }),

        new ExtractTextPlugin("./[name]/resource/bundle.css")
    ],

//替换需要请求的数据接口
    devServer: {
        proxy: {
                "/api/*": {
                "target": {
                "host": "music.163.com",
                "protocol": 'http:',
                "port": 80
                },
            ignorePath: false,
            changeOrigin: true,
            secure: false,
                 // headers: {
                 // "Referer": "http://music.163.com"
                 // }
                }
            }
        }

};
