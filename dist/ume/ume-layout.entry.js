import { r as registerInstance, h, e as Host } from './index-3d8d6d46.js';

const umeLayoutCss = ":host{position:relative;flex:1;display:block;width:100%;padding:var(--ume-base-half, 8rem);max-width:1140rem;margin-right:auto;margin-left:auto}.inner{position:relative;z-index:2;display:flex;flex-direction:row;flex-wrap:wrap}.background-container{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;overflow:hidden}:host([fluid]){max-width:100%}:host(.justify-start) .inner{justify-content:flex-start}:host(.justify-end) .inner{justify-content:flex-end}:host(.justify-center) .inner{justify-content:center}:host(.justify-even) .inner{justify-content:space-evenly}:host(.align-start) .inner{align-items:flex-start}:host(.align-end) .inner{align-items:flex-end}:host(.align-center) .inner{align-items:center}:host(.stretch) .inner{align-items:stretch}::slotted([size='1']){flex:0 0 8.33333%;width:8.33333%;flex-basis:8.33333%}::slotted([size='2']){flex:0 0 16.66666%;width:16.66666%;flex-basis:16.66666%}::slotted([size='3']){flex:0 0 25%;width:25%;flex-basis:25%}::slotted([size='4']){flex:0 0 33.33333%;width:33.33333%;flex-basis:33.33333%}::slotted([size='5']){flex:0 0 41.66666%;width:41.66666%;flex-basis:41.66666%}::slotted([size='6']){flex:0 0 50%;width:50%;flex-basis:50%}::slotted([size='7']){flex:0 0 58.33333%;width:58.33333%;flex-basis:58.33333%}::slotted([size='8']){flex:0 0 66.66666%;width:66.66666%;flex-basis:66.66666%}::slotted([size='9']){flex:0 0 75%;width:75%;flex-basis:75%}::slotted([size='10']){flex:0 0 83.33333%;width:83.33333%;flex-basis:83.33333%}::slotted([size='11']){flex:0 0 91.66666%;width:91.66666%;flex-basis:91.66666%}::slotted([size='12']){flex:0 0 100%;width:100%;flex-basis:100%}@media (max-width : 640px){::slotted(*){flex:0 0 100%;width:100% !important;flex-basis:100% !important}::slotted([hide-mobile]){display:none}}";

const UmeLayout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` spans the full width of it's container.
         */
        this.fluid = false;
    }
    render() {
        return (h(Host, null, h("div", { class: "inner" }, h("slot", null)), h("div", { class: "background-container" }, h("slot", { name: "background" }))));
    }
};
UmeLayout.style = umeLayoutCss;

export { UmeLayout as ume_layout };
