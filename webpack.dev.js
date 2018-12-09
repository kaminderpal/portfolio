const webpackMerge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackCommon = require('./webpack.common')
const webpack = require('webpack');

module.exports = webpackMerge(webpackCommon,{
     mode : "development",
     devtool : "inline-source-map",
     devServer : {
          contentBase : "./dist",
          hot : true
     },
     plugins :[ 
          new webpack.HotModuleReplacementPlugin(),
          new BundleAnalyzerPlugin()
     ]

});