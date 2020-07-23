import { ComponentInterface } from '../../stencil-public-runtime';
import { HTMLStencilElement } from '../../stencil-public-runtime';
export declare class UmeCard implements ComponentInterface {
    /**
     * Height of the header in pixels
     */
    headerSize: number;
    /**
     * Renders the card's elements on the horizontal axis rather than vertical
     */
    horizontal: false;
    host: HTMLStencilElement;
    hasHeader: boolean;
    componentWillLoad(): Promise<void> | void;
    renderHeader(): any;
    render(): any;
}
