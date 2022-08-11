// test

import React, { useEffect, useState } from 'react';

function Header() {
	const [pizza, setPizza] = useState();

	//! чтобы всё завелось сначала запускаем бэк из корня нашего проекта npm run server, а потом наш клиент

	useEffect(() => {
		fetch('/api/products') // !так делаем запрос, без http://localhost:5000
			.then((data) => data.json())
			.then((products) => {
				console.log(products);
				setPizza(products);
			});
	}, []);

	//! могу предположить, что у некоторых бэк будет запускаться на 4000-ом локал хосте,
	//! если да, то идём в package.json клиента и меняем поле "proxy": "http://localhost:5000" на
	//! "proxy": "http://localhost:4000"

	if (!pizza) return null;

	return (
		<div>
			{pizza.map((p) => (
				<img src={p.imageUrls[0]} alt="eslint sosi" />
			))}
		</div>
	);
}

export default Header;
