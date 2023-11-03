const path = require('path');             
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const dotenv = require("dotenv-webpack") 


module.exports = {

    entry: './src/index.js',                              
    output: {                                            
        path: path.join(__dirname, '/dist'),  
        filename: 'bundle.js'                 
    },
    plugins: [                      
        new HtmlWebpackPlugin({              
            filename: 'index.html',          
            template: './src/index.html'
        }),
        new dotenv()         
    ],
    devServer: {                              
        port: 3000,                        
        historyApiFallback: true,             
    },
    
    module: {
        rules: [                               
            {                                   
                test: /\.js$/, 
                use: {
                    loader: 'babel-loader', 
                    options: {presets: ['@babel/preset-env', '@babel/preset-react']} 
                    }                                                                 
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]           
            },
            {
                test: /\.(png|jpg|webp|mp4|wav|svg)$/,
                type: 'asset/resource'                                      
            },                                                                     
        ]
    },
}
