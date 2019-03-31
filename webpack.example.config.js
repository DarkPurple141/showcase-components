const path = require('path')

// this stripped down config will build the component library
// if you're unsure how to configure these things yourself, look at 
// webpack docs.
module.exports = {
    entry: './src/example.tsx',
    mode: process.env.NODE_ENV || 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'example')
    }
}