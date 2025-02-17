import { Box, Button, CardMedia, Divider, Grid, Typography } from '@mui/material';
import sale1 from '../../../assets/sale1.webp';
const products = [
	{
		id: 1,
		title: ' Headphones',
		description: '100 BDT',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Wireless Headphones',
	},
	{
		id: 2,
		title: 'Smart Watch',
		description: '100 BDT',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Smart Watch',
	},
	{
		id: 3,
		title: 'Coffee Maker',
		description: '100 BDT',
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
	{
		id: 2,
		title: 'Smart Watch',
		description: '100 BDT',
		imageUrl: sale1, // Replace with actual image path
		alt: 'Smart Watch',
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

const FlashSale = () => {
	return (
		<Box width={'70%'} margin={'0 auto'} p={0} overflow="hidden">
			<Typography fontSize={'22px'} color={'rgb(66, 66, 66)'} pb={2}>
				Falsh Sale
			</Typography>
			<Box bgcolor={'white'}>
				<Box bgcolor={'white'} p={1}>
					<Box
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
						p={1}
					>
						<Typography fontWeight={500} fontSize={'14px'} color={'#f85606'}>
							On Sale Now
						</Typography>
						<Button
							variant="outlined"
							sx={{ color: '#f85606', borderColor: '#f85606' }}
						>
							SHOP ALL PRODUCTS
						</Button>
					</Box>
				</Box>
				<Divider />
				<Box p={1}>
					<Grid container spacing={2}>
						{products.map((product) => (
							<Grid item xs={12} sm={4} md={2} lg={2} key={product.id}>
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
										<Typography
											fontWeight={400}
											fontSize={'22px'}
											color={'#f85606'}
										>
											৳{product.description}
										</Typography>
										<Box
											display={'flex'}
											justifyContent={'flex-start'}
											alignItems={'center'}
										>
											<Typography
												fontSize={'12px'}
												color={'#9E9E9E'}
												sx={{ textDecoration: 'line-through' }}
											>
												{product.description}
											</Typography>
											<Typography fontSize={'12px'} color={'black'}>
												-{product.description}%
											</Typography>
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

export default FlashSale;
