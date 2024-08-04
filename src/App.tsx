import { ThemeProvider } from '@mui/material';
import Header from './pages/Header/header';
import LandingPageOutlet from './pages/LandingPage';
import theme from './theme';
import Footer from './pages/Footer/footer';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				{' '}
				<Header />
				<LandingPageOutlet />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
