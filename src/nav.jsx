import { useState } from "react"
import {  Link } from "react-router-dom"
import rectangle from "../images/Rectangle 6 (1).png"
import option from "../images/option.svg"



function Nav({showCart}){

   
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
                <Link to="/" className={toggle ? "links appear": "links"} >Shop</Link>
                <a className={toggle ? "links appear": "links"} href="./Aboutus.html">About us</a>
                <a onClick={()=>showCart()} className={toggle ? "links appear": "links"}>Cart</a>
                <a className={toggle ? "links appear": "links"} href="/#">My profile</a>
            </div>
          
        </div>

        </div>
       
    )
}
export default Nav;