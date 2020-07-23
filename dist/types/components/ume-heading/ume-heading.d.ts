import { ComponentInterface } from '../../stencil-public-runtime';
export declare class UmeHeading implements ComponentInterface {
    /**
     * Heading Level
     */
    level: number;
    /**
     * Allows the tag to be displayed as different level while preserving the
     * accessible heading structure.
     */
    display: number;
    render(): any;
}
