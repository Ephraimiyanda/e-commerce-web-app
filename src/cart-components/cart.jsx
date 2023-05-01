import React, { useContext } from 'react';
import dustbin from "../../images/trash-bin-svgrepo-com.svg"
import { CartContext } from '../cart-components/cartContext';
import { Link } from 'react-router-dom';
const Cart = () => {
  const {cartItems,removeFromCart}=useContext(CartContext)
  
 const total = cartItems.reduce((accumulator, current) => (accumulator + current.price)* current.quantity, 0);

 function remove(product){
  removeFromCart(product)
}
console.log(cartItems)
  return (
    <div className="cart">
   
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
<div className='the-cart'>
<div>

          {cartItems.map((items,index)=>(
              <div className='cart-item' key={index} >
              <div> <img className='cartItem-img' src={items.photo} alt="" width={"150px"} height={"140px"}/></div>
              <Link className="product-link" to={`/product/${items.id}`}><div> {items.name}</div></Link>
              <div> {items.price}</div>
               <div>  {items.quantity} </div>
               <div className='cart-btns'>
                   <button className='payment-btn'>Make Payment</button>
                   <button className='remove-item-btn' onClick={()=>{remove(items)}} ><img  src={dustbin} alt="" width ="20px"/> Remove</button>
               </div>
           </div>
          ))}
          
          <li>Total:{total}</li>
        </div>
</div>
      )}
    </div>
  );
};

export default Cart;
