// webpack.config.js
module.exports = {
    entry: [
        "./src/index.tsx"
    ],
    output: {
        filename: "./dist/bundle.js"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss"],
        modules: ["src", "node_modules"]
    },

    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 8080
    },

    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(eot|ttf|woff2?|otf|svg|png|jpg)$/,
                loader: "file-loader"
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};