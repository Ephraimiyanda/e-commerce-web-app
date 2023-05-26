import { useContext, useState } from "react"
import { CartContext } from "./cart-components/cartContext"


export default function Search(){
   const { searchproduct } = useContext(CartContext);
   return(
    <div className={searchproduct.length>0?"search":"hide-seachComponent" }>
    {
     
            <div>
              {searchproduct.length>0?  <h1 className="productOpen-h2">what are you searching for ?...</h1>:""}
               <ul className="search-ul">
                   {searchproduct.map((result)=>result)}
                
               </ul>
                
            </div>
       
    }
   </div>
   )
}