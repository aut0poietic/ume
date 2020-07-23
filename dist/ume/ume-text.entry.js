import { r as registerInstance, h, e as Host } from './index-3d8d6d46.js';

const umeTextCss = ":host{display:block}ume-text *:last-child{padding-bottom:0;margin-bottom:0}";

const UmeText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
UmeText.style = umeTextCss;

export { UmeText as ume_text };
