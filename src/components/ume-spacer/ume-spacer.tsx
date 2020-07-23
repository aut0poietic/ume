import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component( {
	tag : 'ume-spacer',
	styleUrl : 'ume-spacer.css',
	shadow : true,
} )
export class UmeSpacer implements ComponentInterface {
	/**
	 * The height of the spacer in pixels.
	 */
	@Prop() height : number = 32;

	render() {
		return (
			<Host style={ { height : this.height + 'px' } }></Host>
		);
	}

}
