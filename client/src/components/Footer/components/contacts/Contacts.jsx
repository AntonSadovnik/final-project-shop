import React from 'react';
import { ListItemText, List } from '@mui/material';
import './style.scss';

function Contacts() {
	return (
		<List>
			<ListItemText>
				<a className="footer__contacts" href="tel:+996705188955">
					Tel: 996 705 188 955
				</a>
			</ListItemText>
			<ListItemText>
				<a className="footer__contacts" href="tel:+996555188955">
					Tel: 996 555 188 955
				</a>
			</ListItemText>
			<ListItemText className="footer__contacts">Bakaleev, 126</ListItemText>
		</List>
	);
}

export default Contacts;
