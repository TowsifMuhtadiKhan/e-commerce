import { Box, Grid, Typography } from '@mui/material';
import app from '../../../assets/app.png';
import appstore from '../../../assets/GooglePlay.png';

const Payment = () => {
	return (
		<Box width={'70%'} margin={'0 auto'} p={0} overflow="hidden">
			<Box p={1}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4} md={2} lg={4}>
						<Box>
							<Typography
								fontSize={'25px'}
								fontWeight={300}
								color={'rgb(15, 19, 109)'}
							>
								Payment Methods
							</Typography>
						</Box>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<img
									src={app}
									alt="First Image"
									style={{ width: '100%', height: 'auto' }}
								/>
							</Grid>
							<Grid item xs={4}>
								<img
									src={app}
									alt="Second Image"
									style={{ width: '100%', height: 'auto' }}
								/>
							</Grid>
							<Grid item xs={4}>
								<img
									src={app}
									alt="Third Image"
									style={{ width: '100%', height: 'auto' }}
								/>
							</Grid>
						</Grid>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<img
									src={app}
									alt="Fourth Image"
									style={{ width: '100%', height: 'auto' }}
								/>
							</Grid>
							<Grid item xs={4}>
								<img
									src={app}
									alt="Fifth Image"
									style={{ width: '100%', height: 'auto' }}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} sm={4} md={2} lg={7}></Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Payment;
