import * as React from 'react';
import { Button, Typography } from '@mui/material';

export default function CustomButton({
	disabled= false,
	className,
	title,
	textStyle,
	btnStyle,
	onClick,
}) {
	return (
		<Button
			disabled={disabled}
			variant="contained"
			disableRipple
			className={className}
			onClick={onClick}
			sx={btnStyle}
		>
			<Typography sx={textStyle}>{title}</Typography>
		</Button>
	);
}
CustomButton.defaultProps = {
	className: '',
	title: '',
	textStyle: {},
	btnStyle: {},
	onClick: () => {},
};
