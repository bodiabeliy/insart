import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
             __PRIVAT24_URL:JSON.stringify("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4"),
            __ONEFORGE_URL:JSON.stringify("https://api.1forge.com"),
            __IPDATA_API_KEY:JSON.stringify("4f365326c3a7515e3cc57de37dacf37600ffbc59df4b35b81613921e"),
            __ONEFORGE_API_KEY:JSON.stringify("MbKDyaf85a9WntcaYjbK8fOl2ROkCem1") 
            
           
        })
    ]
}
