import React from 'react'
import CartItem from './CartItem'
import uniqid from 'uniqid'

export default function CartOverview(props) {


    return (
        <div className="overview__container">
            <div className="overview__title">
                <h6 className="font-weight-lighter">Item</h6>
                <h6>Num.</h6>
                <h6>Price</h6>
            </div>
            {props.cartItems.map(item => {
                return(
                <CartItem key={uniqid()} itemName={item.title} itemQuantity={item.quantity} itemPrice={`${item.price} $`} />)
            })}
            
        </div>
    )
}
