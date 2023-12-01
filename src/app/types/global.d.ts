declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    export const classNames: IClassNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const  __PRIVAT24_URL: string;
declare const __ONEFORGE_URL:string;
declare const __IPDATA_API_KEY:string;
declare const __ONEFORGE_API_KEY:string;


