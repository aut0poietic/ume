import { r as registerInstance, h, e as Host, g as getElement } from './index-3d8d6d46.js';
import { i as isSlotEmpty } from './utils-cc9b0249.js';

const umeCardCss = ":host{display:flex;flex-direction:column;border:1px solid #333}:host([horizontal]){flex-direction:row;align-items:stretch}.header{position:relative;flex-shrink:0;flex-grow:0;padding:var(--ume-base, 16rem)}.header ::slotted(*){position:relative;z-index:1}.header ::slotted(ume-image){position:absolute;top:0;left:0;z-index:-1}.content{flex-grow:1;padding:var(--ume-base, 16rem)}.content ::slotted(*:last-child){padding-bottom:0}";

const UmeCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Height of the header in pixels
         */
        this.headerSize = 200;
        this.hasHeader = false;
    }
    componentWillLoad() {
        this.hasHeader = isSlotEmpty(this.host, 'header');
    }
    renderHeader() {
        if (!this.hasHeader) {
            return;
        }
        let style = { width: 'auto', height: 'auto' };
        if (this.horizontal) {
            style.width = this.headerSize + 'rem';
        }
        else {
            style.height = this.headerSize + 'rem';
        }
        return (h("div", { class: "header", style: style }, h("slot", { name: "header" })));
    }
    render() {
        return (h(Host, null, this.renderHeader(), h("div", { class: "content" }, h("slot", null))));
    }
    get host() { return getElement(this); }
};
UmeCard.style = umeCardCss;

export { UmeCard as ume_card };
