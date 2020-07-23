import readme from './readme.md';

export default {
	title : 'Building Blocks',
	parameters : {
		notes : readme,
		options : { showPanel : true },
	},
};

export const Card = () => {
	// language=HTML
	return `
		<h1>Card</h1>
		<section class="example" data-title="Default">
			<ume-layout class="example">
				<ume-col size="8">
					<ume-card horizontal>
						<ume-heading  slot="header" level="2" display="3">Card</ume-heading>
						<ume-image cover slot="header" src="https://source.unsplash.com/xH4wVOSNDB8" alt="A lightning strike at the forefront of a supercell thunderstorm."></ume-image>
						<ume-heading level="3" display="4">I am a Card</ume-heading>
						<ume-text>
							<p>Global interactive user-contributed optimize architectures, ubiquitous users applications enterprise dot-com design supply-chains mashups reintermediate transition deploy brand viral B2C?</p> 
							<p>Embrace harness open-source life-hacks syndicate, drive maximize transform action-items proactive reinvent. Embrace harness revolutionize, mashups addelivery, capture real-time systems; cross-platform incentivize engage exploit visionary architect, B2B, "enable drive."</p>
						</ume-text>
						
					</ume-card>
				</ume-col>
			</ume-layout>
		</section>
	`;
};


