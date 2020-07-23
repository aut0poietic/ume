function supportsObjectFit() {
    return 'objectFit' in document.documentElement.style;
}
function generateId() {
    const id = Math.random().toString(36);
    return 'el-' + id.substr(id.length - 9);
}
function isSlotEmpty(el, slot) {
    return !!el.querySelector(`[slot="${slot}"]`);
}

export { isSlotEmpty as i, supportsObjectFit as s };
