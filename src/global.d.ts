declare module '*.module.css' {
    interface Styles {
        [className: string]: string
    }
    const styles: Styles;
    export = styles;
}

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';

declare module "*.svg" {
    import React from 'react';
    const svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default svg;
}