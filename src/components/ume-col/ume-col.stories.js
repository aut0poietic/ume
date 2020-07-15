import readme from './readme.md';

export default {
	title : 'Building Blocks',
	parameters : {
		notes : readme,
		options : { showPanel : true },
	},
};

export const Column = () => {
	return `
		<h1>Column</h1>
		<p>The <strong>Column</strong> is the companion to <strong>Layout</strong> component and represents the 'cells' in the responsive grid. See the <strong>Layout</strong> component for more information on sizing and behavior.</p>
		<section class="example" data-title="Default">
			<ume-layout class="example">
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="3" class="example">3</ume-col>
				<ume-col size="3" class="example">3</ume-col>
				<ume-col size="3" class="example">3</ume-col>
				<ume-col size="3" class="example">3</ume-col>
				<ume-col size="4" class="example">4</ume-col>
				<ume-col size="4" class="example">4</ume-col>
				<ume-col size="4" class="example">4</ume-col>
				<ume-col size="6" class="example">6</ume-col>
				<ume-col size="6" class="example">6</ume-col>
				<ume-col size="12" class="example">12</ume-col>
			</ume-layout>
		</section>
		<h2>Backgrounds</h2>
		<p>Column components can add multiple background images or animations by adding the <code>ume-image</code> or <code>ume-animation</code> to the <code>background</code> slot. Images and animation will appear stacked in source order (last element on top).</p>
		<section class="example" data-title="Fluid">
			<ume-layout class="example" fluid>
				<ume-col size="6">
					<div style="padding: 48px 0; text-align: center">6</div>
					<ume-image slot="background" src="https://source.unsplash.com/xH4wVOSNDB8" opacity="30" alt="A lightning strike at the forefront of a supercell thunderstorm."></ume-image>
				</ume-col>
			</ume-layout>
		</section>
	`;
};


