const path = require('path');
const baseConfig = require('./config/webpack.config').config;

const app = {
    entry: {
        app: './src/app/index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/app/js')
    },
    ...baseConfig
};

const lib = {
    entry: {
        extjs: './src/lib.ts'
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(
            __dirname,
            'dist/lib'
        ),
        library: 'extjs',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    ...baseConfig
};

module.exports = [app, lib];