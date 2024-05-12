const path = require('path');

module.exports = (env) => {
    console.log('NODE_ENV: ', env.NODE_ENV);
    return {
        entry: './',
        mode: env.NODE_ENV, // use the NODE_ENV variable to determine the mode
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        devServer: {
            port: 4200,
            hot: true,
            open: true,
            openPage: 'index.htm'
        }
    }
};