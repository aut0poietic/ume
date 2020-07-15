import { Config } from '@stencil/core';

export const config : Config = {
	namespace : 'ume',
	taskQueue : 'async',
	outputTargets : [
		{
			type : 'dist',
			esmLoaderPath : '../loader',
		},
		{
			type : 'docs-readme',
			strict : true,
		},
		{
			type : 'www',
			serviceWorker : null, // disable service workers
		},
	],
};
