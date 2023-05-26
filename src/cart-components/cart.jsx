import React, { useContext,useState } from 'react';
import dustbin from "../../images/trash-bin-svgrepo-com.svg"
import { CartContext } from '../cart-components/cartContext';
import { Link } from 'react-router-dom';
import Alert from '../alert';

const Cart = () => {
  const[NeedValue,setMessageValue]=useState(false);  
  const {cartItems,removeFromCart,quantity,addQuantity,reduceQuantity}=useContext(CartContext)
  
 const total = cartItems.reduce((item, current) => (item + current.price) * current.quantity,1);

 function remove(product){
  removeFromCart(product)
}

function additemQuantity(quantity){
  addQuantity(quantity)
}
function reduceitemQuantity(quantity){
  reduceQuantity(quantity)
}
  return (
  <div>
      {NeedValue?<Alert type="success"><p className='addToCartMessage'>Successfully removed<span>✔️</span></p></Alert>:""}
    <div className="cart">
  
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p className='empty-cart-p'>Your cart is empty.</p>
      ) : (
<div >
<div className='the-cart'>
          {cartItems.map((items,index)=>(
              <div className='cart-item' key={index} >
              <div> <img className='cartItem-img' src={items.photo} alt="" width={"150px"} height={"140px"}/></div>
              <Link className="product-link" to={`/product/${items.id}`}><div> {items.name}</div></Link>
              <div> ₦ {items.price}</div>
              <div className='increament_decreament-container'>
                <p>{items.quantity}</p>
              <div className='increament_decreament'>
                <button onClick={()=>{
                  reduceitemQuantity(items)
                }}>-</button>
                <button onClick={()=>{
                  additemQuantity(items)}}>+</button>
               </div>
              </div>
               <div className='cart-btns'>
                   <button className='payment-btn'>Make Payment</button>
                   <button className='remove-item-btn' onClick={()=>{
                    remove(items)
                    setMessageValue(true)
                    setTimeout(()=>{
                    setMessageValue(false)
                    },1500)
                  }} ><img  src={dustbin} alt="" width ="20px"/> Remove</button>
               </div>
           </div>
          ))}
          
        </div>
</div>
      )}
      <div className='total'>
        <span>Total:</span>
      <p >₦{parseFloat((total).toFixed(2))}</p>
      </div>
    </div>
  </div>
  );
};

export default Cart;
