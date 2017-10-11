import * as webpack from "webpack";
import * as path from "path";

export default {
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "./test-config/tsconfig-test.json",
                            transpileOnly: true
                        }
                    }
                ],
                exclude: [
                    /\.e2e\.ts$/,
                    /node_modules/
                ]
            },

            {
                test: /.ts$/,
                exclude: /(node_modules|config|tmp|\.spec\.ts|\.e2e\.ts$)/,
                loader: "istanbul-instrumenter-loader",
                enforce: "post"
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: null,
            test: /\.(ts|js)($|\?)/i
        }),

        new webpack.NoEmitOnErrorsPlugin()
    ]
} as webpack.Configuration;
