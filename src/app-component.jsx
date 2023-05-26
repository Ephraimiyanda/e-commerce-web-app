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
import { Redirect } from "react-router-dom";
import Search from "./Search";
import { Link } from "react-router-dom";
import ChangePassword from "./login-signup/change password";
import AddProducts from "./login-signup/New-Products";
function App(){
    const [cartItems, setCartItems]=useState([]);
    const[quantity,setquantity]=useState(1)
    const [user,setUser]=useState(null);  
    const[searchproduct,setsearchProduct]=useState([]);
    const[addToCartMessage,setMessage]=useState(false)
const handlesearch=async(searchQuery)=>{
    try{
        const response =await fetch(`http://localhost:3000/product`);
        const data = await response.json();
       
        function findMatches(searchQuery, product) {
            return product.filter(product => {
              // here we need to figure out if the product matches what was searched
              const regex = new RegExp(searchQuery, 'gi');
              return product.name.match(regex)
            });
          }
          
            const matchArray = findMatches(searchQuery, data);
            const search =   matchArray.map((product) => {
            const regex = new RegExp(`(${searchQuery})`, 'gi');
            const Name = product.name.replace(regex, `<span className="highlightedname">${searchQuery}</span>`);
            const Nameprice=Name+(-product.price)
            return (<Link to={`/product/${product.id}`}><li key={product.id} className="searchname" dangerouslySetInnerHTML={{ __html: Nameprice}}></li></Link>)
            
 })
setsearchProduct(search)

       }
    catch(error){
    }
}
    const handleProfile=(product)=>{
        setUser(product)
    }

function logout(){
  
}
    const addToCart = (product)=>{
        setCartItems([...cartItems ,{...product,quantity}])
       
    }
    
    const addQuantity =(product)=>{
        const quantityUp = product.quantity ++
        setquantity(quantityUp);
        if(product.quantity>10){
            alert("maximum products added to cart")
            product.quantity=10
        }
    }
    const reduceQuantity=(product)=>{
        const quantityDown = product.quantity --
        if(product.quantity<1){
            alert("minimum products in cart")
            product.quantity=1
     }
        setquantity(quantityDown);
    }
    const removeFromCart=(product)=>{
        const updatedCart = cartItems.filter((cartItem)=>cartItem.name!==product.name);
        setCartItems(updatedCart)
    }

   

return(
    <div>
<CartContext.Provider value={{cartItems, addToCart, removeFromCart,quantity,addQuantity,reduceQuantity,handleProfile,user,logout,setUser,handlesearch,searchproduct,addToCartMessage,setMessage}} >
<Router>
    
<Nav handleSearch={handlesearch}/>

        <Switch> 
          
       <Suspense fallback={<Loading/>}>
       <Route  path="/Homepage" component={MainContent} />
        <Route path="/cart" component={Cart}/>
       <Route path="/product/:id" component={ProductOpen}></Route>
       <Route path="/signUp" component={SignUp}></Route>
       <Route path="/AboutUs" component={AboutUs}></Route>
       <Route path="/Profile" component={Profile}></Route>
       <Route path="/search" component={Search}></Route>
       <Route path="/changePassword" component={ChangePassword}></Route>
       <Route path="/sellProduct" component={AddProducts}></Route>
       <Route exact path="/" component={Login}></Route>
      
       </Suspense>
       
        </Switch>
        <Footer/>
 </Router>
</CartContext.Provider>

       
         </div>
)
}
export default App;