export type BuildMode = 'development' | 'production';

export interface BuildOptions {
    port: number;
    mode: BuildMode;
    paths: BuildPaths;
    analyzer: boolean;
}

export interface BuildPaths {
    entry: string;
    output: string;
    public: string;
    src: string;
}