import React from 'react';
import dustbin from "../images/trash-bin-svgrepo-com.svg"
const Cart = ({ cartItems}) => {
  const total = cartItems.reduce((accumulator, current) => (accumulator + current.product.price)* current.quantity, 0);
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item,index) => (
            <div className='cart-item' key={index}>
               <div> <img className='cartItem-img' src={item.product.photo} alt="" width={"150px"} height={"140px"}/></div>
             <div> {item.product.name}</div>
               <div> {item.product.price}</div>
                <div>  {item.quantity} </div>
                <div className='cart-btns'>
                    <button className='payment-btn'>Make Payment</button>
                    <button className='remove-item-btn'><img  src={dustbin} alt="" width ="20px"/> Remove</button>
                </div>
            </div>
          ))}
          <li>Total: {total}</li>
        </div>
      )}
    </div>
  );
};

export default Cart;
