const config = require('./webpack.config.js');

const DtsBundlePlugin = function () {};
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', () => {
        let dts = require('dts-bundle');

        dts.bundle({
            name: 'Xedi',
            main: 'lib/src/index.d.ts',
            out: '../sdk.d.ts',
            removeSource: true
        });
    });
}

config.mode = 'production';
delete config.devtool;

config.output.filename = 'sdk.min.js';

config.plugins = [
    new DtsBundlePlugin()
];

module.exports = config;
