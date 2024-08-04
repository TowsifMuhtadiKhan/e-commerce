import { Box, IconButton, InputBase, Paper } from '@mui/material';
import logoimage from '../../assets/3b870cb043c7f8a9741cbf66329e294e.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
	return (
		<Box bgcolor={'#f85606'} py={3} display={'flex'} justifyContent={'center'} mb={0}>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				gap={2}
				width={'60%'}
				alignItems={'center'}
			>
				<Box width={'30%'}>
					<img
						src={logoimage}
						alt="Descriptive Text"
						style={{ maxWidth: '50%', maxHeight: '100%' }}
					/>
				</Box>
				<Box alignItems={'center'} width={'60%'}>
					<Paper
						component="form"
						sx={{ paddingLeft: '20px', display: 'flex', alignItems: 'center' }}
					>
						<InputBase
							sx={{ flex: 1 }}
							placeholder="Search in Daraz"
							inputProps={{ 'aria-label': 'search google maps' }}
						/>

						<IconButton
							type="button"
							sx={{
								p: '10px',
								color: '#f85606',
								background: '#FFE1D2',
								borderRadius: '0px',
							}}
							aria-label="search"
						>
							<SearchIcon />
						</IconButton>
					</Paper>
				</Box>
				<Box
					width={'20%'}
					display={'flex'}
					justifyContent={'flex-start'}
					alignItems={'left'}
				>
					<ShoppingCartOutlinedIcon
						sx={{
							color: 'white',
							fontSize: '40px',
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Header;
