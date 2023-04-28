import {Routes, Route} from "react-router-dom"
import MainContent from "./main-content"
import Cart from "./cart"
import Footer from "./footer";
import Nav from "./nav";
import { useState } from "react";

function App(){
    const [showcart,handleshowCart]=useState(false)
 

 
return(
    <div>
        <Routes>
        
            <Route path="/" element={<MainContent mainClass={showcart ? "blur":"content-container"}/>}/>
        
        
        </Routes>
         </div>
)
}
export default App;