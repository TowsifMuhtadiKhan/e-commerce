import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import sale1 from '../../../assets/sale1.webp';
import StarRating from '../../../component/startRating';
const products = [
	{
		id: 1,
		title: ' Headphones',
		description: '100 ',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Wireless Headphones',
	},
	{
		id: 2,
		title: 'Smart Watch',
		description: '100 ',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Smart Watch',
	},
	{
		id: 3,
		title: 'Coffee Maker',
		description: '100',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Coffee Maker',
	},
	{
		id: 3,
		title: 'Coffee Maker',
		description: '100',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Coffee Maker',
	},
	{
		id: 2,
		title: 'Smart Watch',
		description: '100',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Smart Watch',
	},
	{
		id: 3,
		title: 'Coffee Maker',
		description: '100',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Coffee Maker',
	},
	{
		id: 3,
		title: 'Coffee Maker',
		description: '100 BDT',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Coffee Maker',
	},
	// Add more products as needed
];

const JustForYou = () => {
	return (
		<Box width={'70%'} margin={'0 auto'} p={0} overflow="hidden">
			<Typography fontSize={'22px'} color={'rgb(66, 66, 66)'} pb={2}>
				Just For You
			</Typography>
			<Box>
				<Box>
					<Grid container spacing={2}>
						{products.map((product) => (
							<Grid item xs={12} sm={3} md={4} lg={2} key={product.id}>
								<Box bgcolor={'white'} p={1}>
									<Box height={250} overflow="hidden">
										<CardMedia
											component="img"
											sx={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
											image={product.imageUrl}
											alt={product.alt}
										/>
									</Box>
									<Box>
										<Typography gutterBottom variant="h5">
											{product.title}
										</Typography>
										<Box
											display={'flex'}
											justifyContent={'flex-start'}
											alignItems={'flex-end'}
										>
											<Typography
												fontWeight={400}
												fontSize={'22px'}
												color={'#f85606'}
												mr={1}
											>
												৳{product.description}
											</Typography>
											<Typography fontSize={'18px'} color={'#9E9E9E'}>
												-{product.description}%
											</Typography>
										</Box>

										<Box>
											<StarRating value={4} max={5} numReviews={298} />
										</Box>
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default JustForYou;
