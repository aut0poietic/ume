import { ComponentInterface } from '../../stencil-public-runtime';
export declare class UmeImage implements ComponentInterface {
    /**
     * Image source url.
     */
    src: string;
    /**
     * Alternative Text
     */
    alt: string;
    /**
     * Width of image in px or rem.
     */
    width: number;
    /**
     * Height of image in px or rem.
     */
    height: number;
    /**
     * Opacity value; Integer 0 - 100.
     */
    opacity: number;
    /**
     * Should the image cover the full width of the image itself.
     */
    cover: boolean;
    render(): any;
}
