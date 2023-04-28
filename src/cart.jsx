import React from 'react';
import dustbin from "../images/trash-bin-svgrepo-com.svg"
import close from "../images/icon-close.svg"
const Cart = ({cartItems,item,cartClass,deleteItem,closeCart}) => {
 
  return (
    <div className={cartClass}>
      <div className='close' onClick={()=>{closeCart()}}><img  src={close} alt="" width={"20px"}  height={"20px"}/></div>
      <h2>Cart</h2>
     <div className='the-cart'>
<div>
         
            <div className='cart-item' key={index}>
               <div> <img className='cartItem-img' src={item.product.photo} alt="" width={"150px"} height={"140px"}/></div>
             <div> {item.product.name}</div>
               <div> {item.product.price}</div>
                <div>  {item.quantity} </div>
                <div className='cart-btns'>
                    <button className='payment-btn'>Make Payment</button>
                    <button className='remove-item-btn' onClick={()=>{deleteItem(item)}}><img  src={dustbin} alt="" width ="20px"/> Remove</button>
                </div>
            </div>
        
          <li>Total: {total}</li>
        </div>
</div>
    
    </div>
  );
};

export default Cart;
