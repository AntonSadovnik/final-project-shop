import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoginForm from './LoginForm';

export default function LoginModal(props) {
	const { loginModal, setLoginModal } = props;
	const [form, setForm] = React.useState(null);

	React.useEffect(() => {
		setForm(<LoginForm setLoginModal={setLoginModal} setForm={setForm} />);
	}, [loginModal]);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: { xs: '200px', sm: '400px' },
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	const handleClose = () => {
		setLoginModal(false);
		setForm(<LoginForm setLoginModal={setLoginModal} setForm={setForm} />);
	};

	return (
		<Modal
			open={loginModal}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				{form}
				<IconButton
					sx={{
						position: 'absolute',
						top: '25px',
						right: '20px',
						// transform: 'translate(-50%, -50%)',
						bgcolor: 'background.paper',
					}}
					edge="start"
					color="inherit"
					onClick={handleClose}
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>
			</Box>
		</Modal>
	);
}
