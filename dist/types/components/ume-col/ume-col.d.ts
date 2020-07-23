import { ComponentInterface } from '../../stencil-public-runtime';
export declare class UmeCol implements ComponentInterface {
    /**
     * Size in grid units, 1 - 12.
     */
    size: number;
    /**
     * If true, will be hidden on mobile resolutions (under 640px).
     */
    hideMobile: boolean;
    render(): any;
}
