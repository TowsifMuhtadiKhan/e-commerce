import { Box, Button, Divider, Typography } from '@mui/material';

const FlashSale = () => {
	return (
		<Box width={'70%'} margin={'0 auto'} p={0}>
			<Typography fontSize={'22px'} color={'rgb(66, 66, 66)'}>
				Falsh Sale
			</Typography>
			<Box bgcolor={'white'} p={1}>
				<Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={1}>
					<Typography fontWeight={500} fontSize={'14px'} color={'#f85606'}>
						On Sale Now
					</Typography>
					<Button variant="outlined" sx={{ color: '#f85606', borderColor: '#f85606' }}>
						SHOP ALL PRODUCTS
					</Button>
				</Box>
			</Box>
			<Divider />
		</Box>
	);
};

export default FlashSale;
