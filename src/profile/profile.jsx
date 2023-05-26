import { useContext, useState } from "react"
import { CartContext } from "../cart-components/cartContext"
import { Link, Redirect } from "react-router-dom"

function Profile(){
    
    const storedUser = localStorage.getItem("user");
    const loggedInUser =JSON.parse(storedUser);
    const [redirect,setRedirect]=useState(false)
    const {setUser}=useContext(CartContext)

    const Logout=()=>{
    setUser(null);
    localStorage.removeItem("user");
    setRedirect(true)
   }

   if(redirect){
    return <Redirect to="/"/>
}
    return (
    <div> 
  
    <div><div className="head ">
            <h1>My Account</h1>
        </div><section className="profile-box">
                <aside>
                    <ul>
                        <li><a href="">profile</a></li>
                        <li><a href="">wallet</a></li>
                        <li><a href="">saved products</a></li>
                        <li><a href="">payments</a></li>
                        <li><a href="">transaction</a></li>
                        <li><Link to="changePassword">change password</Link></li>
                        <li><button className="logout-btn" onClick={Logout}
                            
                            >logout</button></li>
                    </ul>
                </aside>
                <main>
                    <div className="profile-dashboard">
                        <div className="profile">
                            
                            { loggedInUser && loggedInUser.map((users)=>
                            <div key={users.username}>
                             <h4>{users.username}</h4>
                             <div>
                                <p className="joined">Joined on</p>
                                <p>{users.DateJoined}</p>
                             </div>
                            

                             <h5>Lagos Nigeria</h5>
                             </div>
                           )}
                                
                            
                        </div>
                        <div className="edit-btn"><button className="edit">Edit Profile</button></div>
                    </div>

                    <div className="wallet-balance">
                        <div className="wallet-block">
                            <h4>Wallet Balance</h4>
                            <p>#5000</p>
                        </div>
                        <div className="fund-div">
                            <button className="fund">Fund Wallet</button>
                        </div>
                    </div>
                </main>

            </section></div>
   
    </div>
    )}    
    export default Profile;