import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

@Component( {
	tag : 'ume-heading',
	styleUrl : 'ume-heading.css',
	shadow : false,
} )
export class UmeHeading implements ComponentInterface {
	/**
	 * Heading Level
	 */
	@Prop() level : number = 2;

	/**
	 * Allows the tag to be displayed as different level while preserving the
	 * accessible heading structure.
	 */
	@Prop() display : number;

	render() {
		const TagName = 'h' + Math.max( 0, Math.min( this.level, 6 ) );
		const className = this.display ? 'h' + this.display : null;
		return (
			<Host>
				<TagName class={ className }>
					<slot />
				</TagName>
			</Host>
		);
	}
}
