import readme from './readme.md';

export default {
	title : 'Building Blocks',
	parameters : {
		notes : readme,
		options : { showPanel : true },
	},
};

export const Layout = () => {
	return `
		<h1>Layout</h1>
		<p>The <strong>Layout</strong> component is the primary container for all learning content and is similar to <code>.container > .row</code> in many grid systems such as bootstrap</p>
		<p>Layout can contain any other element as a child, but is best paired with <strong>Column</strong> components that allow for additional layout options.</p>
		<p>By default, <strong>Layout</strong> components have a maximum width of <em>1140px</em>.</p>
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
				<ume-col size="6" class="example">7</ume-col>
				<ume-col size="6" class="example">6</ume-col>
				<ume-col size="12" class="example">12</ume-col>
			</ume-layout>
		</section>
		<h2>Fluid Layouts</h2>
		<p>By setting the <code>fluid</code> attribute, the <strong>Layout</strong> component will grow to the size of it's container. Note that additional css may be necessary to produce "edge-to-edge" rendering depending on the theme.</p>
		<section class="example" data-title="Fluid">
			<ume-layout class="example" fluid>
				<ume-col size="1" class="example">1</ume-col>
				<ume-col size="11" class="example">11</ume-col>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="10" class="example">10</ume-col>
				<ume-col size="3" class="example">3</ume-col>
				<ume-col size="9" class="example">9</ume-col>
				<ume-col size="4" class="example">4</ume-col>
				<ume-col size="8" class="example">8</ume-col>
				<ume-col size="5" class="example">5</ume-col>
				<ume-col size="7" class="example">7</ume-col>
			</ume-layout>
		</section>
		<h2>Alignment</h2>
		<p>Horizontal alignment classes can be applied. These classes include:</p>
		<ul>
			<li><code>.justify-start</code></li>
			<li><code>.justify-end</code></li>
			<li><code>.justify-center</code></li>
			<li><code>.justify-even</code></li>
		</ul>
		<section class="example" data-title="Horizontal Alignment">
			<ume-layout class="justify-start example" fluid>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
			
			<ume-layout class="justify-end example" fluid>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
			
			<ume-layout class="justify-center example" fluid>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
			
			<ume-layout class="justify-even example" fluid>
				<ume-col size="2" class="example">2</ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
		</section>
		<p>Vertical alignment classes can also be applied, but only take effect if one column is larger than another. These classes include:</p>
		<ul>
			<li><code>.align-start</code></li>
			<li><code>.align-end</code></li>
			<li><code>.align-center</code></li>
			<li><code>.stretch</code></li>
		</ul>
		<section class="example" data-title="Vertical Alignment">
			<ume-layout class="align-start example" fluid>
				<ume-col size="2" class="example"><div style="padding:24px 0;">2</div></ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
			
			<ume-layout class="align-end example" fluid>
				<ume-col size="2" class="example"><div style="padding:24px 0;">2</div></ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
			
			<ume-layout class="align-center example" fluid>
				<ume-col size="2" class="example"><div style="padding:24px 0;">2</div></ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
			
			<ume-layout class="stretch example" fluid>
				<ume-col size="2" class="example"><div style="padding:24px 0;">2</div></ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
		</section>
		<h3>Stretch</h3>
		<p>Using <code>.stretch</code> can have unexpected results: The column will be stretched to match the height of the <em>largest item in the same row</em>, and will not size all items in the layout the same height.</p> 
		<p><code>.stretch</code> only effects the outer elements; inner content will <em>not</em> stretch to fill the parent.</p>
		<section class="example" data-title="Stretch">
			<ume-layout class="stretch example" fluid>
				<ume-col size="2" class="example"><div style="padding:24px 0;">2</div></ume-col>
				<ume-col size="3" class="example">3</ume-col>
			</ume-layout>
		</section>
		<h2>Background Images</h2>
		<p>Layout components can add multiple background images or animations by adding the <code>ume-image</code> or <code>ume-animation</code> to the <code>background</code> slot. Images and animation will appear stacked in source order (last element on top).</p>
		<section class="example" data-title="Fluid">
			<ume-layout class="example" fluid>
				<ume-col size="6" class="example">
					<div style="padding: 48px 0; text-align: center">6</div>
				</ume-col>
				<ume-image slot="background" src="https://source.unsplash.com/xH4wVOSNDB8" opacity="30" alt="A lightning strike at the forefront of a supercell thunderstorm."></ume-image>
			</ume-layout>
		</section>
	`;
};


