import { useState } from "react"
import {  Link } from "react-router-dom"
import rectangle from "../images/Rectangle 6 (1).png"
import option from "../images/option.svg"



function Nav(){

    const[loggedIn,setloggedIn]=useState(false);
    const [toggle, setToggle] = useState(false)
    return(
       
        <div>
             <div className={toggle ? "nav increase":"nav"}>
            <div className="logo">
                    <img className="h-logo" src={rectangle} alt="" ></img>
                    <h1>AGRIFIED</h1>
                </div>
            <input type="search" name=""  placeholder="Search Food"></input>
            <img className={toggle ?"options hide":"options"} onClick={()=>{
                setToggle(!toggle)
            }} src={option} alt="" width="35px"></img>
             <div className={toggle ? "quick-links show": "quick-links"}>
                <Link to="/Homepage" className={toggle ? "links appear": "links"} >Shop</Link>
                <Link to="/AboutUs" className={toggle ? "links appear": "links"} >About us</Link>
                <Link to="/cart"   className={toggle ? "links appear": "links"}>Cart</Link>
                <Link to="Profile" className={toggle ? "links appear": "links"} href="/#">My profile</Link>
            </div>
          
        </div>

        </div>
       
    )
}
export default Nav;