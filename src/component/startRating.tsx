import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box } from '@mui/material';

interface StarRatingProps {
	value: number;
	max: number;
	numReviews: number;
}
const StarRating: React.FC<StarRatingProps> = ({ value, max, numReviews }) => {
	return (
		<Box display={'flex'}>
			<Rating
				name="customized-empty"
				defaultValue={value}
				precision={0.5}
				emptyIcon={<StarBorderIcon fontSize="inherit" />}
				max={max}
			/>
			<Typography color="textSecondary">({numReviews})</Typography>
		</Box>
	);
};

export default StarRating;
