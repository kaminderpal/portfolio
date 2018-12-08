const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
     entry : "./src/index.js",
     output : {
          filename : '[name].bundle.js',
          path : path.resolve(__dirname,'dist')
     },
     module :{
          rules :[
               {
                    test : /\.css$/,
                    use  : [ "style-loader","css-loader" ]
               },
               {
                    test : /\.(png|svg|jpg|gif)$/,
                    use  : ["file-loader"]
               },{
                    test : /\.(woff|woff2|eot|ttf|otf)$/,
                    use  : ['file-loader']
               }
          ]
     },
     plugins :[
          new cleanWebpackPlugin(['dist']),
          new htmlWebpackPlugin({
               title : "Kaminderpal Singh",
               meta :{
                    author : "Kaminderpal Singh",
                    description : "Web developer, Portfolio",
                    favicon : "",
                    viewport : "width=device-width, initial-scale=1.0"
               }
          })
     ]



}