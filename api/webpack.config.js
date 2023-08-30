
const path = require('path');

const { IgnorePlugin } = require('webpack');

const optionalPlugins = [];
if (process.platform !== "darwin") { // don't ignore on OSX
    optionalPlugins.push(new IgnorePlugin({ resourceRegExp: /^fsevents$/ }));
}

module.exports = {
    mode: 'production',
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'final.js',
    },
    target: 'node',
    plugins: [
        ...optionalPlugins,
    ],
};