import { createTheme } from '@mui/material';

const colors = {
	primaryText: '#000000',
	hoverText: '#FF9846',
	grayText: '#A4ACAD',
	buttonsLightGrayText: '#F2F2F2',
	primaryButton: '#F46D40',
	secondaryButton: '#FF9846',
	backgroungColor: '#E5E5E5',
};

const theme = createTheme({
	palette: {
		primary: {
			main: colors.primaryButton,
		},
		secondary: {
			main: colors.secondaryButton,
		},
		grayColor: {
			main: colors.grayText,
		},
		hoverColor: {
			main: colors.hoverText,
		},
		lightGrayColor: {
			main: colors.buttonsLightGrayText,
		},
		backgroungColor: {
			main: colors.backgroungColor,
		},

		text: {
			primary: colors.primaryText,
			secondary: colors.grayText,
			hoverText: colors.hoverText,
			btnText: colors.buttonsLightGrayText,
		},
	},

	typography: {
		fontFamily: "'Bodoni Moda', sans-serif",
	},
});

export default theme;
