import axios from 'axios';

export const placeNonAuthOrder = (newOrder) =>
	axios.post('/api/orders', {
		...newOrder,
		letterSubject: `${newOrder.name}, thank you for ordering!`,
		letterHtml: `<h2>Your order is placed.</h2>
          <p>Our courier will contact you to inform when your order is ready to be delivered.</p>`,
	});

export const placeAuthOrder = (newOrder) =>
	axios.post('/api/orders', {
		...newOrder,
		letterSubject: `${newOrder.name}, thank you for ordering!`,
		letterHtml: `<h2>Your order is placed. User logged in</h2>
      <p>Our courier will contact you to inform when your order is ready to be delivered.</p>`,
	});
