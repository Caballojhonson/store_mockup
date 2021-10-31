import React from 'react'
import CartItem from './CartItem'
import uniqid from 'uniqid'

export default function CartOverview(props) {
    const cartItems = props.cartItems.map(item => {
        return(
        <CartItem key={uniqid()} 
        itemName={item.title} 
        itemQuantity={item.quantity} 
        itemPrice={`${item.price.toFixed(2)}`} 
        removeItem={() => props.removeItem(item.id)}
        />)
    })

    return (
        <div className="overview__container">
            <div className="overview__title">
                <h6 className="font-weight-lighter">Item</h6>
                <h6>Num.</h6>
                <h6>Price</h6>
                <hr className="overview__hr"></hr>
            </div>

            <div className="overview__cart__container">
                {cartItems}
            </div>

            <div className="overview__footer">
            <hr className="overview__hr"></hr>
                <h5>Total:</h5>
                <h6>{props.totalItems}</h6>
                <h6>{`${props.totalPrice.toFixed(2)}$`}</h6>
            </div>
            
        </div>
    )
}
