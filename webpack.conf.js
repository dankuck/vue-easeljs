const VueLoader = require('vue-loader');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        filename: 'app.js',
        path: __dirname,
    },
    mode: 'development',
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            '@': __dirname,
            '@app': path.resolve(__dirname, './app/'),
            '@chat': path.resolve(__dirname, './app/chat/'),
            '@develop': path.resolve(__dirname, './app/develop/'),
            '@libs': path.resolve(__dirname, './app/libs/'),
            '@textLayer': path.resolve(__dirname, './app/textLayer/'),
            '@world': path.resolve(__dirname, './app/world/'),
            'vue$': 'vue/dist/vue.js',
        },
    },
    plugins: [
        new VueLoader.VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: '../img/[name].[hash:7].[ext]'
                }
            }
        ]
    }
};
