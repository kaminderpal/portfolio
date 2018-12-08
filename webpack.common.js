const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports={
     entry : "./src/index.js",
     output : {
          filename : '[name].bundle.js',
          path : path.resolve(__dirname,'dist')
     },
     optimization :{
          minimizer : [
               new UglifyJsPlugin({
                         cache: true,
                         parallel: true,
                         sourceMap: true 
                    }),
               new OptimizeCSSAssetsPlugin({})
          ],
          splitChunks : {
               chunks : 'all'
          }
     },
     module :{
          rules :[
               {
                    test : /\.css$/,
                    use  : [ MiniCssExtractPlugin.loader,"css-loader" ]
               },
               {
                    test : /\.(png|svg|jpg|gif)$/,
                    use  : ["file-loader"]
               },{
                    test : /\.(woff|woff2|eot|ttf|otf)$/,
                    use  : ['file-loader']
               },
               {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
                  }
          ]
     },
     plugins :[
          new cleanWebpackPlugin(['dist']),
          new htmlWebpackPlugin({
               template : 'index.html'
          }),
          new MiniCssExtractPlugin({
               filename: "[name].css",
               chunkFilename: "[name].css"
          })

     ]
}