import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
	return (
		<Box width={'70%'} margin={'0 auto'} pt={4} pb={4} overflow="hidden">
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item>
					<Typography fontSize={'26px'}>Daraz International</Typography>
					<Box>
						<Link href="#" underline="none">
							Pakistan
						</Link>
						<Link href="#" underline="none">
							Bangladesh
						</Link>
						<Link href="#" underline="none">
							Sri Lanka
						</Link>
						<Link href="#" underline="none">
							Myanmar
						</Link>
						<Link href="#" underline="none">
							Nepal
						</Link>
					</Box>
				</Grid>
				<Grid item>
					<Typography variant="subtitle1" gutterBottom>
						Follow Us
					</Typography>
					<Box>
						<IconButton component="span">
							<FacebookIcon />
						</IconButton>
						<IconButton component="span">
							<YouTubeIcon />
						</IconButton>
						<IconButton component="span">
							<TwitterIcon />
						</IconButton>
						<IconButton component="span">
							<InstagramIcon />
						</IconButton>
					</Box>
				</Grid>
				<Grid item>
					<Typography variant="subtitle1" gutterBottom>
						© Daraz 2024
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
