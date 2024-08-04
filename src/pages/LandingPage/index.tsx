import { Box } from '@mui/material';
import Categories from './parts/categories';
import LandingPageCarusel from './parts/landingPageCarusel';
import FlashSale from './parts/flashSale';
import JustForYou from './parts/justForYou';
import Details from './parts/details';
import Payment from './parts/payment';
import MoreDetails from './parts/moreDetails';

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
			<Box pt={3}>
				<JustForYou />
			</Box>
			<Box pt={3}>
				<Details />
			</Box>
			<Box pt={3} pb={3} bgcolor={'white'}>
				<Payment />
			</Box>
			<Box pt={3}>
				<MoreDetails />
			</Box>
		</Box>
	);
};

export default LandingPageOutlet;
