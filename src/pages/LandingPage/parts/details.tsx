import { Box, Grid, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import app from '../../../assets/app.png';
import appstore from '../../../assets/GooglePlay.png';

const Details = () => {
	return (
		<Box width={'70%'} margin={'0 auto'} p={0} overflow="hidden">
			<Box p={1}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4} md={2} lg={3}>
						<Box>
							<Typography
								fontSize={'25px'}
								fontWeight={300}
								color={'rgb(15, 19, 109)'}
							>
								Customer Care
							</Typography>
						</Box>
						<Box>
							<Typography variant="body1">Help Center</Typography>
							<Typography variant="body1">How to Buy</Typography>
							<Typography variant="body1">Returns & Refunds</Typography>
							<Typography variant="body1">Contact Us</Typography>
							<Typography variant="body1">Terms & Conditions</Typography>
							<Typography variant="body1">
								CCMS - Central Complain Management System
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4} md={2} lg={3}>
						<Box>
							<Typography
								fontSize={'25px'}
								fontWeight={300}
								color={'rgb(15, 19, 109)'}
							>
								Daraz
							</Typography>
						</Box>
						<Box>
							<Typography variant="body1">Help Center</Typography>
							<Typography variant="body1">How to Buy</Typography>
							<Typography variant="body1">Returns & Refunds</Typography>
							<Typography variant="body1">Contact Us</Typography>
							<Typography variant="body1">Terms & Conditions</Typography>
							<Typography variant="body1">
								CCMS - Central Complain Management System
							</Typography>
							<Typography variant="body1">Help Center</Typography>
							<Typography variant="body1">How to Buy</Typography>
							<Typography variant="body1">Returns & Refunds</Typography>
							<Typography variant="body1">Contact Us</Typography>
							<Typography variant="body1">Terms & Conditions</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4} md={4} lg={1}></Grid>
					<Grid item xs={12} sm={4} md={4} lg={5}>
						<Box
							display={'flex'}
							justifyContent={'space-between'}
							alignItems={'flex-start'}
						>
							<Box
								display={'flex'}
								alignItems={'center'}
								justifyContent={'flex-start'}
								width={'40%'}
							>
								<Box>
									<AcUnitIcon
										sx={{ fontSize: '40px', mr: '5px', color: '#f85606' }}
									/>
								</Box>
								<Box>
									<Typography
										fontSize={'25px'}
										fontWeight={300}
										color={'#f85606'}
									>
										Happy Shopping
									</Typography>
									<Typography
										fontSize={'20px'}
										fontWeight={300}
										color={'rgb(15, 19, 109)'}
									>
										Download APP
									</Typography>
								</Box>
							</Box>
							<Box display={'flex'} alignItems={'center'} width={'60%'}>
								<Box>
									<img
										src={appstore}
										alt="Description of First Image"
										style={{ width: '100%', height: 'auto' }}
									/>
								</Box>
								<Box>
									<img
										src={app}
										alt="Description of Second Image"
										style={{ width: '100%', height: 'auto' }}
									/>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Details;
