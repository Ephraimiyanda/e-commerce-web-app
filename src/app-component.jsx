import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import MainContent from "./main-content"
import Cart from "./cart-components/cart"
import Footer from "./footer";
import Nav from "./nav";
import { CartContext } from "./cart-components/cartContext";
import { useState } from "react";
import ProductOpen from "./product-components/productOpen";


function App(){
    const [cartItems, setCartItems]=useState([]);
    const addToCart = (product)=>{
        setCartItems([...cartItems ,product])
    }
    const removeFromCart=(product)=>{
        const updatedCart = cartItems.filter((cartItem)=>cartItem.name!==product.name);
        setCartItems(updatedCart)
    }

return(
    <div>
<CartContext.Provider value={{cartItems, addToCart, removeFromCart}} >
<Router>
<Nav />

        <Switch> 
        <Route exact path="/" component={MainContent} />
        <Route path="/cart" component={Cart}/>
       <Route path="/product/:id" component={ProductOpen}></Route>
        </Switch>
        <Footer/>
 </Router>
</CartContext.Provider>

       
         </div>
)
}
export default App;