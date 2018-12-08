const path = require('path');
const fs   = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const about  = fs.readFileSync(__dirname + "/src/templates/about.html");
const sidebar = fs.readFileSync(__dirname+ "/src/templates/sidebar.html");
const education = fs.readFileSync(__dirname+ "/src/templates/education.html");
const experience = fs.readFileSync(__dirname+ "/src/templates/experience.html");
const interest  = fs.readFileSync( __dirname + "/src/templates/interests.html" );
const skills    = fs.readFileSync( __dirname + "/src/templates/skills.html");
const contact  = fs.readFileSync(__dirname + "/src/templates/contact.html");


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
               },{
                    test : /\.html$/,
                    use :{
                         loader :'file-loader',
                         options : '[name].[ext]'
                    },
                    exclude : path.resolve(__dirname,'index.html')
               }
          ]
     },
     plugins :[
          new cleanWebpackPlugin(['dist']),
          new htmlWebpackPlugin({
               template : 'index.html',
               inject : true,
               about : about,
               experience : experience,
               education : education,
               skills :skills,
               interest : interest,
               contact : contact,
               sidebar : sidebar
          }),
          new MiniCssExtractPlugin({
               filename: "[name].css",
               chunkFilename: "[name].css"
          })

     ]
}