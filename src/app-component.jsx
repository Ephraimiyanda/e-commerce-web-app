import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import MainContent from "./main-content"
import Cart from "./cart-components/cart"
import Footer from "./footer";
import Nav from "./nav";
import { CartContext } from "./cart-components/cartContext";
import { useState } from "react";
import ProductOpen from "./product-components/productOpen";
import Login from "./login-signup/login";
import SignUp from "./login-signup/sign-up";
import AboutUs from "./about";
import Profile from "./profile/profile";
import { Suspense } from "react";
import Loading from "./loading";
function App(){
    const [cartItems, setCartItems]=useState([]);
    const[quantity,setquantity]=useState(1)
    const [user,setUser]=useState(null);
    

    const handleProfile=(product)=>{
        setUser(product)
    }

    const addToCart = (product)=>{
        setCartItems([...cartItems ,{...product,quantity}])
    }
    
    const addQuantity =(product)=>{
        const quantityUp = product.quantity++
        setquantity(quantityUp);
        if(product.quantity>10){
            alert("maximum products added to cart")
            product.quantity=10
        }
    }
    const reduceQuantity=(product)=>{
        const quantityDown = product.quantity--
        if(product.quantity<0){
            alert("minimum products in cart")
            product.quantity=0
     }
        setquantity(quantityDown);
    }
    const removeFromCart=(product)=>{
        const updatedCart = cartItems.filter((cartItem)=>cartItem.name!==product.name);
        setCartItems(updatedCart)
    }

return(
    <div>
<CartContext.Provider value={{cartItems, addToCart, removeFromCart,quantity,addQuantity,reduceQuantity,handleProfile,user}} >
<Router>
<Nav />
        <Switch> 
          
       <Suspense fallback={<Loading/>}>
       <Route exact path="/Homepage" component={MainContent} />
        <Route path="/cart" component={Cart}/>
       <Route path="/product/:id" component={ProductOpen}></Route>
       <Route path="/signUp" component={SignUp}></Route>
       <Route path="/AboutUs" component={AboutUs}></Route>
       <Route path="/Profile" component={Profile}></Route>
       <Route path="/" component={Login}></Route>
       </Suspense>
       
        </Switch>
        <Footer/>
 </Router>
</CartContext.Provider>

       
         </div>
)
}
export default App;