import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { supportsObjectFit } from '../../utils/utils';

@Component( {
	tag : 'ume-image',
	styleUrl : 'ume-image.css',
	shadow : true,
} )
export class UmeImage implements ComponentInterface {
  /**
   * Image source url.
   */
	@Prop() src! : string;

  /**
   * Alternative Text
   */
	@Prop() alt! : string;

  /**
   * Width of image in px or rem.
   */
	@Prop() width : number;

  /**
   * Height of image in px or rem.
   */
	@Prop() height : number;

  /**
   * Opacity value; Integer 0 - 100.
   */
	@Prop() opacity : number;

  /**
   * Should the image cover the full width of the image itself.
   */
	@Prop( { reflect : true } ) cover : boolean;

	render() {
		let background = {};
		if ( ! supportsObjectFit() ) {
			background = { backgroundImage : `url(${ this.src })` };
		}
		let opacity = {
			opacity : (
				this.opacity / 100
			).toString(),
		};
		return (
			<Host>
				<div class="inner" style={ background }>
					<img
						style={ opacity }
						class={ supportsObjectFit() ? '' : 'fallback' }
						src={ this.src }
						alt={ this.alt }
						width={ this.width }
						height={ this.height }
					/>
				</div>
			</Host>
		);
	}
}
