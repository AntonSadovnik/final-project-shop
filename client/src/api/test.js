	//! чтобы всё завелось сначала запускаем бэк из корня нашего проекта npm run server, а потом наш клиент

	useEffect(() => {
		fetch('/api/products') // !так делаем запрос, без http://localhost:5000
			.then((data) => data.json())
			.then((products) => {
				console.log(products);
			});
	}, []);

	//! могу предположить, что у некоторых бэк будет запускаться на 4000-ом локал хосте,
	//! если да, то идём в package.json клиента и меняем поле "proxy": "http://localhost:5000" на
	//! "proxy": "http://localhost:4000"