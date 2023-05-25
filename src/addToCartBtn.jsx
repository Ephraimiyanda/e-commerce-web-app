import { useContext } from "react";
import { CartContext } from "./cart-components/cartContext";
import Alert from './alert';
function AddToCartBtn({product,addToCartBtn}){
    const {addToCart,setMessage} = useContext(CartContext);
   
const handleCart=(product)=>{
addToCart(product);
setMessage(true)
setTimeout(()=>{
    setMessage(false)
},1500)    
}
return(
    <button className={addToCartBtn} onClick={()=>{
        handleCart(product);
       
    }} >Add to cart</button>
)
}
export default AddToCartBtn;
