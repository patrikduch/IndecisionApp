const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    console.log('env', env);
    const isProduction = env == 'production';

    return {
            entry: './src/index.js',

            output: {
                path: path.join(__dirname, 'public'),
                filename: 'bundle.js'
            },

            mode: isProduction ? 'production' : 'development',
            devtool: isProduction ? 'source-map': 'eval',

            module: {
                rules: [
                    {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },


                {
                    test: /\.s?css$$/,
                    use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')({}),
                            require('cssnano')({ preset: 'default' }),
                        ],
                        minimize: false
                        },
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                    ],
                },
            ]    
        },

    
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                //both options are optional
                filename: "App.css",
                chunkFilename: "",  
            }),
        
        ],

    }


}


