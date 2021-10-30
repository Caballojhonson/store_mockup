import React, { useState } from 'react';
import ApiRequest from '../Components/ApiRequest';
import Header from '../Components/Header';

import Product from '../Components/Product';

export default function Store() {
	const [apiData, setApiData] = useState([]);

	const apiCall = (data) => {
		setApiData(data);
	};

	const products = apiData.map((item) => {
		return (
			<Product
				title={item.title}
				image={item.image}
				description={item.description}
				price={item.price + '$'}
			/>
		);
	});

	return (
		<div>
			<Header />
			<ApiRequest passData={apiCall} />
			<div className="store__product__container">{products}</div>
		</div>
	);
}
