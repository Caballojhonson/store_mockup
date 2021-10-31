import React, { useState, useEffect } from 'react';
import ApiRequest from '../Components/ApiRequest';
import Header from '../Components/Header';
import Product from '../Components/Product';
import uniqid from 'uniqid'

export default function Store() {
	const [apiData, setApiData] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(null);
	const [totalPrice, setTotalPrice] = useState(0);

	const apiCall = (data) => {
		setApiData(data);
	};

	const getCartItems = (id, quantity) => {
		const product = apiData.filter((item) => item.id === id);

		const cartItem = {
			id: uniqid(),
			title: product[0].title,
			price: product[0].price,
			quantity: quantity
		}

		if(cartItem.quantity > 0) {
			setCartItems((prevState) => prevState.concat(cartItem));
			sumTotalItems()
		}
	};

	const sumTotalItems = () => {
		setCartCount(() => {
			const itemQuantities = cartItems.map(item => item.quantity)
			return itemQuantities.reduce((a, b) => {return a + b},0)
		})
	};

	const sumTotalPrice = () => {
		setTotalPrice(() => {
			const totals = cartItems.map(item => item.quantity * item.price)
			return totals.reduce((a, b) => {return a + b}, 0)
		})
	}

	useEffect(() => {
		sumTotalItems()
		sumTotalPrice()
	}, [cartItems])

	const removeItem = (id) => {
		setCartItems(prev => cartItems.filter(item => item.id !== id))
	}

	const products = apiData.map((item) => {
		return (
			<Product
				key={uniqid()}
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
			<Header cartItems={cartItems} totalItems={cartCount} totalPrice={totalPrice} removeItem={removeItem}/>
			<ApiRequest passData={apiCall} />
			<div className="store__product__container">{products}</div>
		</div>
	);
}
