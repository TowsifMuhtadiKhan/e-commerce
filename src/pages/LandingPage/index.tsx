import { Box } from '@mui/material';
import Categories from './parts/categories';
import LandingPageCarusel from './parts/landingPageCarusel';
import FlashSale from './parts/flashSale';

const LandingPageOutlet = () => {
	return (
		<Box pb={5} bgcolor={'#f5f5f5'}>
			<LandingPageCarusel />
			<Box pt={3}>
				<Categories />
			</Box>
			<Box pt={3}>
				<FlashSale />
			</Box>
		</Box>
	);
};

export default LandingPageOutlet;
