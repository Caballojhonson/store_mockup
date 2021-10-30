import React, { useState } from 'react';
import ApiRequest from '../Components/ApiRequest';
import Header from '../Components/Header';
import Product from '../Components/Product';
import uniqid from 'uniqid'

export default function Store() {
	const [apiData, setApiData] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(null);

	const apiCall = (data) => {
		setApiData(data);
	};

	const getCartItems = (id, quantity) => {
		const product = apiData.filter((item) => item.id === id);
		product[0].quantity = quantity;
        product[0].id = uniqid();
		setCartItems((prevState) => prevState.concat(product));
        sumTotalItems(quantity)
	};

	const sumTotalItems = (quantity) => {
        setCartCount(prev => prev + quantity)
	};

	const products = apiData.map((item) => {
		return (
			<Product
				key={item.id}
				id={item.id}
				title={item.title}
				image={item.image}
				description={item.description}
				price={item.price + '$'}
				callback={getCartItems}
			/>
		);
	});

	return (
		<div>
			<Header cartItems={cartItems} totalItems={cartCount} />
			<ApiRequest passData={apiCall} />
			<div className="store__product__container">{products}</div>
		</div>
	);
}
