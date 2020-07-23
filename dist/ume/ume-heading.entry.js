import { r as registerInstance, h, e as Host } from './index-3d8d6d46.js';

const umeHeadingCss = ":host{display:block}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{line-height:1.45;margin:0;padding:0 0 var(--ume-base-half, 8rem) 0}h1,.h1{font-size:calc(var(--ume-base, 16rem) * 2)}h2,.h2{font-size:calc(var(--ume-base, 16rem) * 1.75)}h3,.h3{font-size:calc(var(--ume-base, 16rem) * 1.5)}h4,.h4{font-size:calc(var(--ume-base, 16rem) * 1.25)}h5,.h5{font-size:calc(var(--ume-base, 16rem) * 1.125)}h6,.h6{font-size:var(--ume-base, 16rem)}";

const UmeHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Heading Level
         */
        this.level = 2;
    }
    render() {
        const TagName = 'h' + Math.max(0, Math.min(this.level, 6));
        const className = this.display ? 'h' + this.display : null;
        return (h(Host, null, h(TagName, { class: className }, h("slot", null))));
    }
};
UmeHeading.style = umeHeadingCss;

export { UmeHeading as ume_heading };
