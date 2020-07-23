import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component( {
	tag : 'ume-text',
	styleUrl : 'ume-text.css',
	shadow : false,
} )
export class UmeText implements ComponentInterface {
	render() {
		return (
			<Host>
				<slot/>
			</Host>
		);
	}
}
