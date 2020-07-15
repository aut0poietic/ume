import readme from './readme.md';

export default {
	title : 'Basic/My Component',
	parameters : {
		notes : readme,
	},
};

export const Default = () => {
	return `
		<h2>My Component</h2>
		<p>This is my component. it doesn't do much.</p>
		<section class="example">
			<my-component first="Stencil" last="'Don't call me a framework' JS" className="hydrated"></my-component>
		</section>
	`;
};


