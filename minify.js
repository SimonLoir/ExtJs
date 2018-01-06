var compressor = require('node-minify');

compressor.minify({
    compressor: 'babel-minify',
    input: './extjs.js',
    output: './build/extjs.min.js',
    callback: function (err, min) {
        console.log(min);
    }
});