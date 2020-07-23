module.exports = {
	stories : [
		'../src/components/**/*.stories.js',
	],
	addons : [
		'@storybook/addon-knobs/register',
		'@storybook/addon-a11y/register',
		'@storybook/addon-notes/register',
		'@storybook/addon-viewport/register',
	],
};
