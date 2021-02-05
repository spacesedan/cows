module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				height: 'height',
			},
			gridTemplateRows: {
				8: 'repeat(8, minmax(0, 1fr))',
			},
			height: {
				'85vh': '85vh',
				'65vh': '65vh',
				100: '28rem',
				106: '32rem',
			},
			width: {
				100: '26rem',
			},
			padding: {
				30: '8.5rem',
			},
			gradientColorStops: theme => ({
				...theme('colors'),
				'white-1': 'rgba(255, 255, 255, 0.4)',
				'white-2': 'rgba(255, 255, 255, 0.05)',
			}),
			backgroundImage: theme => ({
				hero: 'url(/just-right.jpg)',
				cow: 'url(/cow.jpg)',
				hamburger: 'url(/hamburger.svg)',
			}),
			fontFamily: {
				body: ['Hind'],
			},
			gridTemplateRows: {
				layout: '75px repeat(2, minmax(250px, 1fr))',
			},
		},
	},
	variants: {
		extend: {
			height: ['group-hover'],
		},
	},
	plugins: [],
};
