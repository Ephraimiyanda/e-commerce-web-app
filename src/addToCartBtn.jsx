import { useContext } from "react";
import { CartContext } from "./cart-components/cartContext";
import Alert from './alert';
function AddToCartBtn({product,addToCartBtn}){
    const {addToCart,setMessage} = useContext(CartContext);
   
const handleCart=(product)=>{
addToCart(product);

}
return(
    <button className={addToCartBtn} onClick={()=>{
        handleCart(product);
        setTimeout(()=>{
            setMessage(<Alert type="success"><p className='addToCartMessage'>successfully added to cart<span>✔️</span></p></Alert>)
        },500)    
    }} >Add to cart</button>
)
}
export default AddToCartBtn;
