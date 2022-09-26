import React from 'react';
import { ListItemText, List, Link } from '@mui/material';

function Contacts() {
	return (
		<List sx={{ 'a, span': { color: '#a4acad', textDecoration: 'none' } }}>
			<ListItemText>
				<Link href="tel:+996705188955">Tel: 996 705 188 955</Link>
			</ListItemText>
			<ListItemText>
				<Link href="tel:+996555188955">Tel: 996 555 188 955</Link>
			</ListItemText>
			<ListItemText>Bakaleev, 126</ListItemText>
		</List>
	);
}

export default Contacts;
