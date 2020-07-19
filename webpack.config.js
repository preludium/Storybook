const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const mode = argv.mode;
    const isDevelopment = !mode || mode === "development";

    return {
        mode: mode,
        entry: path.join(__dirname, "src/index.tsx"),
        output: {
            chunkFilename: isDevelopment ? "[name].chunk.js" : "[name].[contenthash:4].chunk.js",
            filename: isDevelopment ? "[name].js" : "[name].[contenthash:4].js",
            path: path.resolve(__dirname, "dist"),
            publicPath: "/"
        },
        devtool: isDevelopment && "source-map",
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    loader: ["babel-loader", "eslint-loader"],
                    exclude: /node_modules/
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)$/i,
                    exclude: [/\.(js|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                    loader: "file-loader",
                    options: {
                        name: isDevelopment ? "[name].[ext]" : "[name].[contenthash:4].[ext]",
                    },
                }
            ],
        },
        optimization: {
            minimize: !isDevelopment,
            splitChunks: {
                chunks: "all",
                name: false
            },
            runtimeChunk: true
        },
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@misc": path.resolve(__dirname, "src/misc"),
                "@stories": path.resolve(__dirname, "src/stories"),
                "@utils": path.resolve(__dirname, "src/utils")
            },
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html")
            })
        ],
        devServer: {
            compress: true,
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            host: "localhost",
            hot: true,
            open: true,
            progress: true,
            port: "3000"
        }
    }
};