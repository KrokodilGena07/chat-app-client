import {BuildOptions} from './types';

export function buildResolvers({paths}: BuildOptions) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': paths.src
        }
    };
}