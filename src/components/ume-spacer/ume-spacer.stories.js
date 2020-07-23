import readme from './readme.md';

export default {
	title : 'Building Blocks',
	parameters : {
		notes : readme,
		options : { showPanel : true },
	},
};

export const Spacer = () => {
	return `
		<h1>Spacer</h1>
		<p>The simple <strong>Spacer</strong> component can be used to add arbitrary vertical spacing between elements. 
		Set the <code>height</code> attribute to the number of pixels the spacer should be.</p>
		<section class="example" data-title="Default">
			<p style="border-bottom: 1px solid;">First Element (has bottom border)</p>
			<ume-spacer height="64"></ume-spacer>
			<p style="border-top:1px solid;">With a spacer in the middle (has top border)</p>
		</section>
	`;
};


