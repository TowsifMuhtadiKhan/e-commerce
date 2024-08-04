import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageSliderProps {
	images: { src: any; alt: string }[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
	};
	return (
		<Box
			sx={{
				width: '80%',
				margin: '0 auto',
				'.slick-dots': {
					bottom: '25px',
					transform: 'scale(1)',
					li: {
						button: {
							'&:before': {
								fontSize: '12px',
								color: 'white',
								opacity: 1,
							},
						},
					},
				},
				'.slick-arrow': {
					zIndex: 1,
					transform: 'scale(1.5)',
				},
				'.slick-prev': {
					left: '10px',
				},
				'.slick-next': {
					right: '10px',
				},
			}}
		>
			<Slider {...settings}>
				{images.map((image, index) => (
					<div key={index}>
						<img
							src={image.src}
							alt={image.alt}
							style={{ width: '100%', height: 'auto' }}
						/>
					</div>
				))}
			</Slider>
		</Box>
	);
};

export default ImageSlider;
