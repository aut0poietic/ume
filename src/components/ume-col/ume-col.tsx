import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component( {
	tag : 'ume-col',
	styleUrl : 'ume-col.css',
	shadow : true,
} )
export class UmeCol implements ComponentInterface {
	/**
	 * Size in grid units, 1 - 12.
	 */
	@Prop() size : number;
	/**
	 * If true, will be hidden on mobile resolutions (under 640px).
	 */
	@Prop() hideMobile : boolean = false;

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
