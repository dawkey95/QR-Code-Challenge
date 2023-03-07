import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import image from '../images/image-qr-code.png';

export default function MediaCard() {
	return (
		<Grid2
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			style={{ minHeight: '100vh' }}
			sx={{ backgroundColor: 'qrCode.lightGray' }}
		>
			<Card
				sx={{
					width: 320,
					height: 497,
					borderRadius: 5,
					p: 2,
					backgroundColor: 'qrCode.white',
				}}
			>
				<CardMedia
					sx={{
						height: 288,
						borderRadius: 3,
						margin: 'auto',
					}}
					image={image}
				/>

				<CardContent align="center" sx={{ width: 288, mt: 2 }}>
					<Typography
						variant="h1"
						sx={{
							width: 288,
							height: 56,
							color: 'qrCode.darkBlue',
							fontSize: 22,
							fontWeight: 700,
							mb: 2,
						}}
					>
						Improve your front-end skills by building projects
					</Typography>

					<Typography
						variant="body1"
						sx={{
							width: 256,
							height: 57,
							color: 'qrCode.grey',
							fontSize: 15,
							fontWeight: 400,
							letterSpacing: 0.1875,
						}}
					>
						Scan the QR code to visit Frontend Mentor and take your coding skills to
						the next level
					</Typography>
				</CardContent>
			</Card>
		</Grid2>
	);
}
