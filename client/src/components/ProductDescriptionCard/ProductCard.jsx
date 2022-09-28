import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProduct, getProductsByCategory } from '../../api/Api';
import Error from '../Error/Error';
import RecommendedSlider from '../Slider/components/recommendedSlider/SliderTwo';
import BlockSwitchingInCategory from './components/BlockSwitchingInCategory';
import BlockDrawCard from './components/BlockDrawCard';
import { addToCart } from '../../store/actions';
import Loader from '../Loader/Loader';

function ProductCard() {
	const [product, setProduct] = useState({});
	const [forwardProductId, setForwardProductId] = useState('');
	const [backProductId, setBackProductId] = useState('');
	const [quantityGoods, setQuantityGoods] = useState(1);

	const dispatch = useDispatch();
	const { id } = useParams();
	const cardTitle = 'name' in product ? product.name : '';
	const categorySlider = product.categories === 'drinks' ? 'sushi' : 'drinks';
	async function showProduct() {
		await getProduct(id).then(({ data: { products } }) => {
			if (products.length === 0) return setProduct({ error: 404 });
			getProductsByCategory(products[0].categories).then((data) => {
				const currentProductId = data.data.products.findIndex(
					(element) => element.itemNo === id
				);

				const forvardProd =
					typeof data.data.products[currentProductId + 1] === 'undefined'
						? 0
						: currentProductId + 1;

				setForwardProductId(
					`/products/${data.data.products[forvardProd].itemNo}`
				);

				const backProd =
					typeof data.data.products[currentProductId - 1] === 'undefined'
						? data.data.products.length - 1
						: currentProductId - 1;

				setBackProductId(`/products/${data.data.products[backProd].itemNo}`);
			});

			return setProduct(products[0]);
		});
	}

	useEffect(() => {
		showProduct();
	}, []);

	useEffect(() => {
		showProduct();
		setQuantityGoods(1);
	}, [id]);

	const addQuantity = () => {
		setQuantityGoods(quantityGoods + 1);
	};

	const minusQuantity = () => {
		if (quantityGoods > 1) {
			setQuantityGoods(quantityGoods - 1);
		}
	};

	const onClickButton = () => {
		product.cartQuantity = quantityGoods;
		dispatch(addToCart(product));
		setQuantityGoods(1);
	};

	if (cardTitle === '') {
		return <Loader />;
	}

	if (cardTitle !== '') {
		return (
			<>
				<Stack style={{ margin: '0 auto' }}>
					<BlockSwitchingInCategory
						backProductId={backProductId}
						forwardProductId={forwardProductId}
					/>

					<BlockDrawCard
						product={product}
						minusQuantity={minusQuantity}
						quantityGoods={quantityGoods}
						addQuantity={addQuantity}
						onClickButton={onClickButton}
					/>
				</Stack>

				<RecommendedSlider category={categorySlider} />
			</>
		);
	}
	if (product.error === 404) {
		return <Error />;
	}
}
export default ProductCard;
