const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = (env) => {
    return{
    mode: "development",
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.(ys)$/,
                exclude: /node_modules/,
                loader:'file-loader'
            },
            {
                test:/\.(css)$/,
                use:[ MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.(scss)$/,
                use:[ MiniCssExtractPlugin.loader ,'css-loader','sass-loader']
            },
            {
                test:/\.(png|jpg|gif|ico|svg|webp)$/,
                use:[
                {
                    loader:'file-loader',
                    options:{
                        outputPath:'images',
                        name: '[name].[ext]'
                    }
                }
                ]
            },
            {
                test:/\.(ttf|otf|eot|woff|woof2)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            outputPath:'fonts',
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(mov|mp4]|webm)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]'
                    }  
                  }
                ]
              }
        ]
    },
    target:"web",

    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html',
            favicon: "./src/favicon.png"
        }),
        new MiniCssExtractPlugin({
            filename:'main-[hash:8].css'
        }),
        // new ImageminWebpWebpackPlugin({
        //     config: [{
        //         test: /\.(jpe?g|png)/,
        //         options: {
        //           quality:  75
        //         }
        //       }],
        //     overrideExtension: true,
        //     detailedLogs: true,
        //     silent: false,
        //     strict: true
        // })
    ],
    devServer:{
        contentBase: "./dist",
        open: true,
        port: 9000,
        liveReload: false,
        watchOptions:{
            poll: true,
            ignored: "/node_modules/"
        },
        publicPath: '/',
        historyApiFallback: true,
    }
}
}