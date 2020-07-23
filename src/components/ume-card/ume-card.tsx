import { Component, Host, h, Prop, Element, ComponentInterface } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { isSlotEmpty } from '../../utils/utils';

@Component( {
	tag : 'ume-card',
	styleUrl : 'ume-card.css',
	shadow : true,
} )
export class UmeCard implements ComponentInterface {
	/**
	 * Height of the header in pixels
	 */
	@Prop() headerSize : number = 200;

	/**
	 * Renders the card's elements on the horizontal axis rather than vertical
	 */
	@Prop( { reflect : true } ) horizontal : false;

	@Element() host : HTMLStencilElement;

	hasHeader = false;

	componentWillLoad() : Promise<void> | void {
		this.hasHeader = isSlotEmpty( this.host, 'header' );
	}

	renderHeader() {
		if ( ! this.hasHeader ) {
			return;
		}
		let style = { width : 'auto', height : 'auto' };
		if ( this.horizontal ) {
			style.width = this.headerSize + 'rem';
		} else {
			style.height = this.headerSize + 'rem';
		}
		return (
			<div class="header" style={ style }>
				<slot name="header" />
			</div>
		);
	}

	render() {
		return (
			<Host>
				{ this.renderHeader() }
				<div class="content">
					<slot />
				</div>
			</Host>
		);
	}

}
