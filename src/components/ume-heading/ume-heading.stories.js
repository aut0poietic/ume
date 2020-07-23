import readme from './readme.md';

export default {
	title : 'Building Blocks',
	parameters : {
		notes : readme,
		options : { showPanel : true },
	},
};

export const Heading = () => {
	return `
		<h1>Heading</h1>
		<p>The <strong>Heading</strong> component is just what it sounds like: One of the standard HTML heading tags <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc.</p>
		<p>The component was created to provide a consistent target for the Ume Editor, and with the exception of the display attribute, behaves the same as any other heading.</p>
		<p><strong>Note:</strong> the Heading tag does not use shadow DOM. This means that styles applied globally will alter the appearance of the underlying HTML.</p>
		<section class="example" data-title="Default">
			<ume-heading level="1">Heading 1</ume-heading>
			<ume-heading level="2">Heading 2</ume-heading>
			<ume-heading level="3">Heading 3</ume-heading>
			<ume-heading level="4">Heading 4</ume-heading>
			<ume-heading level="5">Heading 5</ume-heading>
			<ume-heading level="6">Heading 6</ume-heading>
		</section>
		<h2>Display</h2>
		<p>It's extremely common for creators to want to display a heading with an appearance of a smaller/larger tag, 
		but preserve the correct heading structure. The <code>display</code> attribute allows the creator to specify a number corresponding 
		to a different heading level to alter the appearance of the component, while not altering the structural heading level.</p>
		<section class="example" data-title="Fluid">
			<ume-heading level="6">Heading 1</ume-heading>
			<ume-heading level="5">Heading 2</ume-heading>
			<ume-heading level="4">Heading 3</ume-heading>
			<ume-heading level="3">Heading 4</ume-heading>
			<ume-heading level="2">Heading 5</ume-heading>
			<ume-heading level="1">Heading 6</ume-heading>
		</section>
	`;
};


