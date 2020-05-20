const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'sdk.js',
        path: path.resolve(__dirname, 'lib'),
        publicPath: 'lib',
        library: 'Xedi',
        libraryExport: 'default',
        libraryTarget: 'window'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    }
};
