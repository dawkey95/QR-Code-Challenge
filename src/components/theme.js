import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		qrCode: {
			white: '#FFFFFF',
			lightGray: '#D5E1EF',
			grey: '#7D889E',
			darkBlue: '#1F314F',
		},
	},
	breakpoints: {
		values: {
			mobile: 375,
			desktop: 1440,
		},
	},
	typography: {
		fontFamily: ['Outfit', 'sans-serif'].join(','),
	},
});

export default theme;
