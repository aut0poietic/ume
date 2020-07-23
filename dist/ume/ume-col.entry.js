import { r as registerInstance, h, e as Host } from './index-3d8d6d46.js';

const umeColCss = ":host{position:relative;display:block;box-sizing:border-box;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:var(--ume-base-half, 8rem)}.inner{position:relative;z-index:2}.background-container{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;overflow:hidden}:host(.example) .inner{background-color:#f1f1f1}";

const UmeCol = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If true, will be hidden on mobile resolutions (under 640px).
         */
        this.hideMobile = false;
    }
    render() {
        return (h(Host, null, h("div", { class: "inner" }, h("slot", null)), h("div", { class: "background-container" }, h("slot", { name: "background" }))));
    }
};
UmeCol.style = umeColCss;

export { UmeCol as ume_col };
