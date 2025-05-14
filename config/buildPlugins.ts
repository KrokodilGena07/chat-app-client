import {BuildOptions} from './types';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {ProgressPlugin, Configuration} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins({mode, paths, analyzer}: BuildOptions) {
    const isDev = mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.public, 'index.html'),
            favicon: path.resolve(paths.public, 'favicon.ico')
        })
    ];

    if (isDev) {
        plugins.push(new ProgressPlugin());
        plugins.push(new ForkTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshWebpackPlugin())
    } else {
        plugins.push(new MiniCssExtractPlugin({
            chunkFilename: 'css/[name].[contenthash:8].css',
            filename: 'css/[name].[contenthash:8].css'
        }));
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins;
}