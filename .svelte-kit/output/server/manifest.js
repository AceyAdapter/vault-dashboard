export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","img/daisyui.jpeg","img/sveltekit.png","img/vs.png"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"start-1c0b2e4f.js","js":["start-1c0b2e4f.js","chunks/index-b6926417.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
