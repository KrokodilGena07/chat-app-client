import path from 'path';
import {buildWebpack} from './config/buildWebpack';
import {BuildMode, BuildPaths} from './config/types';

interface EnvVariables {
    port?: number;
    mode?: BuildMode;
    analyzer?: boolean;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    };

    return buildWebpack({
        port: env.port || 3000,
        mode: env.mode || 'development',
        paths,
        analyzer: env.analyzer || false
    });
}