import {BuildOptions} from './types';

export function buildDevServer({port}: BuildOptions) {
    return {
        port,
        historyApiFallback: true,
        hot: true
    };
}