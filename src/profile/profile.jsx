import { useContext } from "react";
import { CartContext } from "../cart-components/cartContext";
function Profile() {
    const {user}=useContext(CartContext);
console.log(user)
    return (
    <div> 
        <h1>ertyuigo</h1>
        <p>{user}</p>
    </div>
    )}    
    export default Profile;