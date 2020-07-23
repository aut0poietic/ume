/* global window */
import {
	configure,
	addParameters,
	addDecorator,
} from '@storybook/web-components';
import { withA11y } from '@storybook/addon-a11y';
import './preview.css';

addDecorator( withA11y );

addParameters( {
	docs : {
		iframeHeight : '200px',
	},
} );

const req = require.context( '../src/components', true, /\.stories\.(js|mdx)$/ );
//configure( req, module );

// configure hot reloading for web components (full refresh, not true hot).
if ( module.hot ) {
	module.hot.accept( req.id, () => {
		const currentLocationHref = window.location.href;
		window.history.pushState( null, null, currentLocationHref );
		window.location.reload();
	} );
}
