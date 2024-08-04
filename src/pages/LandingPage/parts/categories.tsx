import { Box, Grid, Paper, Typography } from '@mui/material';
import cat1 from '../../../assets/cat.webp';
import cat2 from '../../../assets/cat2.webp';
import cat3 from '../../../assets/cat3.webp';
import cat4 from '../../../assets/cat4.webp';
import cat5 from '../../../assets/cat5.webp';
import cat6 from '../../../assets/cat6.webp';
import cat7 from '../../../assets/cat7.webp';
import cat8 from '../../../assets/cat8.webp';

type Category = {
	id: number;
	title: string;
	imageUrl: string;
};
const categories: Category[] = [
	{ id: 1, title: 'Routers', imageUrl: cat1 },
	{ id: 2, title: 'Watches and Accessories', imageUrl: cat2 },
	{ id: 3, title: 'Smart Phones', imageUrl: cat3 },
	{ id: 4, title: 'Egg Boilers', imageUrl: cat4 },
	{ id: 5, title: 'Plastic', imageUrl: cat5 },
	{ id: 5, title: 'Plastic', imageUrl: cat6 },
	{ id: 5, title: 'Plastic', imageUrl: cat7 },
	{ id: 5, title: 'Plastic', imageUrl: cat8 },
	{ id: 1, title: 'Routers', imageUrl: cat1 },
	{ id: 2, title: 'Watches and Accessories', imageUrl: cat2 },
	{ id: 3, title: 'Smart Phones', imageUrl: cat3 },
	{ id: 4, title: 'Egg Boilers', imageUrl: cat4 },
	{ id: 5, title: 'Plastic', imageUrl: cat5 },
	{ id: 5, title: 'Plastic', imageUrl: cat6 },
	{ id: 5, title: 'Plastic', imageUrl: cat7 },
	{ id: 5, title: 'Plastic', imageUrl: cat8 },

	// Continue adding all your categories
];
const Categories = () => {
	return (
		<Box width={'70%'} margin={'0 auto'} p={0}>
			<Typography fontSize={'22px'} color={'rgb(66, 66, 66)'} pb={2}>
				Categories
			</Typography>
			<Box bgcolor={'white'}>
				<Grid container spacing={0} padding={0}>
					{categories.map((category, index) => (
						<Grid item xs={12} sm={12} md={12} lg={1.5} key={category.id}>
							<Box
								style={{
									padding: '20px',
									textAlign: 'center',
									minHeight: '200px',
									maxHeight: '200px',
								}}
								borderRight={
									(index + 1) % 8 === 0
										? 'none'
										: '1px solid rgb(153, 153, 153, 0.4) '
								}
								borderBottom={'1px solid rgb(153, 153, 153,0.4)'}
							>
								<img
									src={category.imageUrl}
									alt={category.title}
									style={{
										width: '100%',
										minHeight: '120px',
										maxHeight: '120px',
										maxWidth: '120px',
									}}
								/>
								<Typography fontSize={'14px'}>{category.title}</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Categories;
