import { useState } from "react"
import { Outlet, Link ,useLoaderData} from "react-router-dom"
import Cart from "./cart"
import rectangle from "../images/Rectangle 6 (1).png"
import option from "../images/option.svg"



function Nav(){
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
           
          
        </div>
  <div className={toggle ? "quick-links show": "quick-links"}>
                <Link to={'./main-content'} className={toggle ? "links appear": "links"} href="#products">Shop</Link>
                <a className={toggle ? "links appear": "links"} href="./Aboutus.html">About us</a>
               <li><Link to={'./cart'} className={toggle ? "links appear": "links"} >Cart</Link></li>
                <a className={toggle ? "links appear": "links"} href="/#">My profile</a>
            </div>
            <Outlet />
        </div>
       
    )
}
export default Nav;