import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component( {
	tag : 'ume-layout',
	styleUrl : 'ume-layout.css',
	shadow : true,
} )
export class UmeLayout implements ComponentInterface {
	/**
	 * If `true` spans the full width of it's container.
	 */
	@Prop() fluid : boolean = false;

	render() {
		return (
			<Host>
				<div class="inner">
					<slot></slot>
				</div>
				<div class="background-container">
					<slot name="background"></slot>
				</div>
			</Host>
		);
	}
}
