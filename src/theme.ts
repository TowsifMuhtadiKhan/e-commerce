import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: [
			'Noto Sans',
			'sans-serif', // Fallback to sans-serif in case Noto Sans isn't available
		].join(','),
	},
});

export default theme;
