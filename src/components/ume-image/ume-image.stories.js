import readme from './readme.md';

export default {
	title : 'Building Blocks',
	parameters : {
		notes : readme,
		options : { showPanel : true },
	},
};

export const Image = () => {
	return `
		<h1>Image</h1>
		<p>The <strong>Image</strong> component is a basic building block, but allows for several advanced uses with other components. Like with ordinary <code>img</code> tags, the <code>src</code> and <code>alt</code> attributes are <em>required</em>.</p>
		
		<p>First, the image is a <em>block</em> element and will fill the width of it's container. This means that a source image that is larger than the containing element will be reduced to the size of the container while maintaining the appropriate aspect ratio.</p>
		<section class="example" data-title="Large Image Source">
			<ume-image src="https://source.unsplash.com/xH4wVOSNDB8/1920x933" alt="A lightning strike at the forefront of a supercell thunderstorm."></ume-image> 
		</section>  
		<p>Images that are smaller than the containing element will display at their actual size, but the Image component itself will occupy the full block area.</p>

		<section class="example" data-title="Small Image Source">
			<ume-image src="https://source.unsplash.com/xH4wVOSNDB8/640x311" alt="A lightning strike at the forefront of a supercell thunderstorm."></ume-image> 
		</section>
		<h2>Explicit Size</h2>
		<p>Setting an explicit <code>height</code> or <code>width</code> will constrain the image in that dimension, using the natural aspect ratio of the source image to determine the other dimension. If you set both <code>width</code> and <code>height</code> the image will be forced to that width and height, skewing the image.</p>

		<section class="example" data-title="Height & Width">
			<ume-image src="https://source.unsplash.com/xH4wVOSNDB8/640x311" alt="A lightning strike at the forefront of a supercell thunderstorm." width="200"></ume-image>
			<br>
			<ume-image src="https://source.unsplash.com/xH4wVOSNDB8/640x311" alt="A lightning strike at the forefront of a supercell thunderstorm." height="50"></ume-image>
			<br>
			<ume-image src="https://source.unsplash.com/xH4wVOSNDB8/640x311" alt="A lightning strike at the forefront of a supercell thunderstorm." width="200" height="50"></ume-image> 
		</section>
		<h2>Opacity</h2>
		<p>The <code>opacity</code> can be set to a percentage value (0 - 100), where 100 is completely opaque and 0 is completely transparent. This can be particularly powerful when combined with other images or a background color.</p>
		<section class="example" data-title="Opacity">
			<ume-image src="https://source.unsplash.com/xH4wVOSNDB8" opacity="50" alt="A lightning strike at the forefront of a supercell thunderstorm."></ume-image> 
		</section>
		<h2>Cover</h2>
		<p>If supplied, the <code>cover</code> property can be added to force the image to "cover" the area occupied by the component within it's parent (such as a Column or Layout).</p>
		<p>This property is applied automatically when using an image as a background.</p>
		<section class="example" data-title="Opacity">
			<div style="width:300px;height:300px;">
				<ume-image src="https://source.unsplash.com/xH4wVOSNDB8" cover alt="A lightning strike at the forefront of a supercell thunderstorm."></ume-image>
			</div> 
		</section>
		<p style="font-style: italic; opacity: .7;font-size: 12rem;">Thunderstorm/Lightning photo by <a href="https://unsplash.com/@phanto_sea?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Justin Hu</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Unsplash</a></p>
	`;
};


