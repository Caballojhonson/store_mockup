import React from 'react'

export default function CartItem(props) {
    return (
        <div className="cartItem__container ">
            <h6 className="cartItem__name">{props.itemName}</h6>
            <h5>{props.itemQuantity}</h5>
            <h5>{`${props.itemPrice}$`}</h5>
            <i className="cartItem__cancel bi bi-x-circle-fill" onClick={props.removeItem} ></i>

        </div>
    )
}
