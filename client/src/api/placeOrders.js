import axios from 'axios';

export const placeOrder = (newOrder) =>
	axios.post('/api/orders', {
		...newOrder,
		letterSubject: `${newOrder.name}, thank you for ordering!`,
		letterHtml: `<h2>Your order is placed.</h2>
          <p>Our specialist will contact you to inform about all the details.</p>`,
	});

export const removeOrderedProducts = (token) =>
	axios.delete('/api/cart', {
		headers: {
			Authorization: token,
		},
	});
