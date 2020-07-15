import { r as registerInstance, h, H as Host } from './index-ad88a850.js';

function supportsObjectFit() {
    return 'objectFit' in document.documentElement.style;
}

const umeImageCss = ":host,.inner{position:relative;display:block;max-width:100%}img{display:block;max-width:100%;object-fit:cover}img.fallback{opacity:0}:host([cover]),:host([cover]) .inner,:host([slot='background']),:host([slot='background']) .inner{width:100%;height:100%;background-size:cover;overflow:hidden}:host([cover]) img,:host([slot='background']) img{width:100%;height:100%;background-size:cover;overflow:hidden}";

const UmeImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        let background = {};
        if (!supportsObjectFit()) {
            background = { backgroundImage: `url(${this.src})` };
        }
        let opacity = {
            opacity: (this.opacity / 100).toString(),
        };
        return (h(Host, null, h("div", { class: "inner", style: background }, h("img", { style: opacity, class: supportsObjectFit() ? '' : 'fallback', src: this.src, alt: this.alt, width: this.width, height: this.height }))));
    }
};
UmeImage.style = umeImageCss;

export { UmeImage as ume_image };
