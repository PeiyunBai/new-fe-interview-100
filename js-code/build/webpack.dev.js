/*
 * @Author: baipeiyun
 * @Date: 2022-02-14 15:11:11
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-02-24 19:48:49
 * @FilePath: /临时用/fe-interview-100/js-code/build/webpack.dev.js
 * @Description:
 */
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackCommonConf = require("./webpack.common.js");
const { distPath } = require("./paths.js");

module.exports = merge(webpackCommonConf, {
    mode: "development",
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify("development"),
        }),
    ],
    devServer: {
        host: "127.0.0.1",
        port: 3000,
        progress: true, // 显示打包的进度条
        contentBase: distPath, // 根目录
        open: true, // 自动打开浏览器
        compress: true, // 启动 gzip 压缩
    },
    devtool: "eval-cheap-source-map",
});
