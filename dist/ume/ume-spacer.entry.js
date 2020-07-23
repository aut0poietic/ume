import { r as registerInstance, h, e as Host } from './index-3d8d6d46.js';

const umeSpacerCss = ":host{display:block;visibility:hidden}";

const UmeSpacer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The height of the spacer in pixels.
         */
        this.height = 32;
    }
    render() {
        return (h(Host, { style: { height: this.height + 'px' } }));
    }
};
UmeSpacer.style = umeSpacerCss;

export { UmeSpacer as ume_spacer };
