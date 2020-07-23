import { HTMLStencilElement } from '@stencil/core/internal';

export function supportsObjectFit() {
	return 'objectFit' in document.documentElement.style;
}

export function generateId() : string {
	const id : string = Math.random().toString( 36 );
	return 'el-' + id.substr( id.length - 9 );
}

export function isSlotEmpty( el : HTMLStencilElement, slot : string ) : boolean {
	return !! el.querySelector( `[slot="${ slot }"]` );
}
