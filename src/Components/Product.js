import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'

export default function Product(props) {
    const [quantity, setQuantity] = useState(0)

    function handleChange(e) {
        e.preventDefault();
        setQuantity(parseInt(e.target.value))
    }

    const add = () => setQuantity(prev => prev + 1)
    const substract = () => setQuantity(prev => prev > 0 ? prev - 1 : 0)

	return (
		<div className="product__container">
			<img className="product__image" src={props.image} alt="" />
			<div className="product__main">
				<h1 className="product__name">{props.title}</h1>
				<p className="product__description">{props.description}</p>
                <ul className="product__price">{props.price}</ul>
				<div className="product__footer flex-row">
					<div className="product__quantity__container input-group">
						<button className=" btn btn-outline-secondary" onClick={substract}>-</button>
						<input type="number" onChange={handleChange} value={quantity}/>
						<button className=" btn btn-outline-secondary" onClick={add}>+</button>
					</div>
					<Button className="product__cart__button btn btn-dark" onClick={() => props.callback(props.id, quantity)}>Add to cart</Button>
				</div>
			</div>
		</div>
	);
}