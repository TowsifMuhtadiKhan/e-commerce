import { ThemeProvider } from '@mui/material';
import Header from './pages/Header/header';
import LandingPageOutlet from './pages/LandingPage';
import theme from './theme';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				{' '}
				<Header />
				<LandingPageOutlet />
			</ThemeProvider>
		</>
	);
}

export default App;
