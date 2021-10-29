import React from 'react';

export default function Product(props) {
	return (
		<div className="product__container">
			<img className="product__image" src={props.image} alt="" />
			<div className="product__main">
				<h1 className="product__name">{props.title}</h1>
				<p>{props.description}</p>
                <ul className="product__price">{props.price}</ul>
				<div className="product__footer">
					<div className="product__quantity__container">
						<button>-</button>
						<input />
						<button>+</button>
					</div>
					<button className="product__button">Add to cart</button>
				</div>
			</div>
		</div>
	);
}
