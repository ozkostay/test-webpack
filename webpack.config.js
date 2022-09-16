
const path = require('path'); //подключаем path за Глобал
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtrackPlugin = require('mini-css-extract-plugin');
//const { mainModule } = require('process');

module.export = {
    output: {
        //path: path.resolve(__dirname, './dist2'),
        filename: 'main2.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/i,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCSSExtrackPlugin.loader,        
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCSSExtrackPlugin()
    ]
};

// const path = require('path'); //подключаем path за Глобал
// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         path: path.resole( __dirname, result), // вместо каталога dist теперь result
//         filename: 'app.bundle.js' // и файл app.bundle.js
//     }
// } 