import { Box, Grid } from '@mui/material';
import ImageSlider from '../../../component/sliderWithImage';
import img1 from '../../../assets/1.webp';
import img2 from '../../../assets/2.webp';
import img3 from '../../../assets/3.webp';
import img4 from '../../../assets/4.webp';

const LandingPageCarusel = () => {
	const imageData = [
		{ src: img1, alt: 'Description of image 1', style: { height: 'auto', width: 'auto' } },
		{ src: img2, alt: 'Description of image 2', style: { height: 'auto', width: 'auto' } },
		{ src: img3, alt: 'Description of image 2', style: { height: 'auto', width: 'auto' } },
		{ src: img4, alt: 'Description of image 2', style: { height: 'auto', width: 'auto' } },
	];

	return (
		<Box bgcolor={'#E7E8EC'}>
			{' '}
			<Box width={'80%'} margin={'0 auto'} p={0}>
				<ImageSlider images={imageData} />
			</Box>
		</Box>
	);
};

export default LandingPageCarusel;
