import readme from './readme.md';

export default {
	title : 'Building Blocks',
	parameters : {
		notes : readme,
		options : { showPanel : true },
	},
};

export const Text = () => {
	// language=HTML
	return `
		<h1>Text</h1>
		<p>The <strong>Text</strong> component has no additional functionality. Future development may enforce a list of tags that can be displayed via sanitization.</p>
		<p>The component exists primarily to provide an interaction target for the Ume Editor.</p>
		<section class="example" data-title="Default">
			<ume-text>
				<p>Nothing to see here. <em>Seriously, <strong>go away!</strong></em></p>
			</ume-text>
		</section>
	`;
};


