import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProduct, getProductsByCategory } from '../../api/Api';
import Error from '../Error/Error';
import RecommendedSlider from '../Slider/components/recommendedSlider/SliderTwo';
import BlockSwitchingInCategory from './components/BlockSwitchingInCategory';
import BlockDrawCard from './components/BlockDrawCard';
import { addToCart } from '../../store/actions';

function ProductCard() {
	const [product, setProduct] = useState({});
	const [forwardProductId, setForwardProductId] = useState('');
	const [backProductId, setBackProductId] = useState('');
	const [quantityGoods, setQuantityGoods] = useState(1);

	const dispatch = useDispatch();
	const { id } = useParams();
	const cardPicture = 'imageUrls' in product ? product.imageUrls[0] : '';
	const cardWeight = 'weight' in product ? product.weight : '';
	const cardTitle = 'name' in product ? product.name : '';
	const cardPrice = 'currentPrice' in product ? product.currentPrice : '';
	const cardPpromoPrice = 'previousPrice' in product ? product.previousPrice : '';
	let cardCompound = 'ingredients' in product ? product.ingredients : '';
	cardCompound = 'contains' in product ? product.contains.toString() : cardCompound;
	const displayCompound = cardCompound !== '' ? 'block' : 'none';
	const displaycardPpromoPrice = cardPpromoPrice !== '' ? 'block' : 'none';
	const grams = product.categories === 'drinks' ? 'ml' : 'grams';
	const categorySlider = product.categories === 'drinks' ? 'sushi' : 'drinks';

	async function showProduct() {

		await getProduct(id).then(({ data: { products } }) => {
			if (products.length === 0) return setProduct({ "error": 404 });
			getProductsByCategory(products[0].categories).then((data) => {
				const currentProductId = data.data.products.findIndex(
					(element) => element.itemNo === id
				);

				const forvardProd = typeof data.data.products[currentProductId + 1] === 'undefined'
					? 0 : currentProductId + 1;

				setForwardProductId(
					`/products/${data.data.products[forvardProd].itemNo}`
				);

				const backProd = typeof data.data.products[currentProductId - 1] === 'undefined'
					? data.data.products.length - 1 : currentProductId - 1;

				setBackProductId(`/products/${data.data.products[backProd].itemNo}`);
			});
			return setProduct(products[0]);
		});
	}

	useEffect(() => { showProduct(); }, []);

	useEffect(() => {
		showProduct();
		setQuantityGoods(1);
	}, [id]);

	const addQuantity = () => { setQuantityGoods(quantityGoods + 1); };

	const minusQuantity = () => {
		if (quantityGoods > 1) { setQuantityGoods(quantityGoods - 1); }
	};

	const onClickButton = () => {
		product.cartQuantity = quantityGoods;
		dispatch(addToCart(product));
	};

	if (cardTitle !== "") {
		return (
			<>
				<Stack style={{ margin: '0 auto', }} >

					<BlockSwitchingInCategory backProductId={backProductId} forwardProductId={forwardProductId} />

					<BlockDrawCard cardPicture={cardPicture} cardTitle={cardTitle} cardWeight={cardWeight} grams={grams}
						displaycardPpromoPrice={displaycardPpromoPrice} cardPpromoPrice={cardPpromoPrice}
						cardPrice={cardPrice} minusQuantity={minusQuantity} quantityGoods={quantityGoods} addQuantity={addQuantity}
						displayCompound={displayCompound} cardCompound={cardCompound} onClickButton={onClickButton}
					/>
				</Stack>

				<RecommendedSlider category={categorySlider} />
			</>
		)
	}
	if (product.error === 404) {
		return (<Error />)
	}
} export default ProductCard;
