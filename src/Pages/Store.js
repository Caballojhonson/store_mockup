import React, { useState, useEffect } from 'react';
import { useLocalStorage } from '../useLocalStorage';
import ApiRequest from '../Components/ApiRequest';
import Header from '../Components/Header';
import Product from '../Components/Product';
import uniqid from 'uniqid'

export default function Store() {

	const [apiData, setApiData] = useLocalStorage('apiData',[]);
	const [cartItems, setCartItems] = useLocalStorage('cartItems',[]);
	const [cartCount, setCartCount] = useLocalStorage('cartCount',null);
	const [totalPrice, setTotalPrice] = useLocalStorage('totalPrice',0);

	const apiCall = (data) => {
		setApiData(data);
	};

	const getCartItems = (id, quantity) => {
		const product = apiData.filter((item) => item.id === id);
		const matching = cartItems.find((item) => item.title === product[0].title)

		if (matching) {
			matching.quantity = matching.quantity + quantity;
			sumTotalPrice()
			sumTotalItems()
		} 
		else {
		const cartItem = {
			id: uniqid(),
			title: product[0].title,
			price: product[0].price,
			quantity: quantity
		}

		if(cartItem.quantity > 0) {
			setCartItems((prevState) => prevState.concat(cartItem));
		}
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
		setCartItems(cartItems.filter(item => item.id !== id))
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
