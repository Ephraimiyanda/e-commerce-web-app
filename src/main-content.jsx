import Item from "./product-components/product";
import elipse from "/images/Ellipse 132.png"
import yellowCircle from "/images/Ellipse 128.png"
import redCircle from "/images/Ellipse 129.png"
import tractor from "/images/tractor.png"
import tractor1 from "/images/one.png"
import tractor2 from "/images/two.png"
import tractor3 from "/images/three.png"
import tractor4 from "/images/four.png"
import { useContext } from "react";
import { CartContext } from "./cart-components/cartContext";
import Search from "./Search";
function MainContent(){
const{searchproduct}=useContext(CartContext)
    return(
<div className="content-container">
<Search product={searchproduct}/>
<div>
            <div className="header--text">
                <h1>Linkages between <span className="green">farmers</span>  and <span className="green"> consumers </span></h1>
                <button className="header--btn"><a href="./agric/first.html">Get Started</a></button>
            </div>

    <div className="search-content"> </div><div className="products" id="products">
                <h1 className="fruits" href="fruits">Fruits</h1>
                <div id="firstrow">

         < Item productClass={"product-container"}  productType="fruit"  />
   
              </div>
            </div><div className="products">
                <h1>Vegetables</h1>
                <div id="firstrow">
         < Item productClass={"product-container"}  productType="vegetable"  />
     
      </div>
            </div>
            <div className="products">
                <h1>spicies</h1>
                <div id="firstrow">
         < Item  productClass={"product-container"} productType="spice"  />
    
                    </div>
            </div>
            <div className="products">
                <h1>Grains</h1>
                <div id="firstrow">
                
         < Item productClass={"product-container"}  productType="grain"  />
     
               </div>
            </div>
            <div className="products">
                <h1>cereals</h1>
                <div id="firstrow">
         < Item productClass={"product-container"} productType="cereal"  />
     
                </div>
            </div><div className="service">
                <h2>Hiring Service</h2>
                <div className="h-service">
                    <div className="track">
                        <img className="tractor" src={tractor} alt=""></img>
                            <div className="circles">
                                <img className="purple-circle" src={elipse} alt=""></img>
                                    <img className="yellow-circle" src={yellowCircle} alt=""></img>
                                        <img className="red-circle" src={redCircle} alt=""></img>
                                        </div>

                                    </div>
                                    <div className="track-paragraph">
                                        <p>If you're looking for a reliable and efficient service for agro tools hiring,
                                             look no further than our company. We specialize in providing top-quality agro 
                                             tools for all your farming needs. Our tools are specifically designed to make 
                                             your work easier, faster and more efficient, thereby increasing your productivity 
                                             and reducing your labor costs.</p>
                                    </div>
                                </div>
                        </div>
                        
                    
                    <div className="yellow">
                        <section>
                            <img className="machines" src={tractor1} alt=""></img>
                                <div className="white-bground">
                                    <h2>Borehole loader</h2>
                                    <button className="more">more</button>
                                </div>
                            </section>

                        <section>
                            <img className="machines" src={tractor2} alt=""></img>
                                <div className="white-bground">
                                    <h2>Wheel loader</h2>
                                    <button className="more">more</button>
                                </div>
                            </section>

                        <section>
                            <img className="machines" src={tractor3} alt=""></img>
                                <div className="white-bground">
                                    <h2>Diesel forklift</h2>
                                    <button className="more">more</button>
                                </div>
                            </section>

                        <section>
                            <img className="lift" src={tractor4} alt=""></img>
                                <div className="white-bground">
                                    <h2>Electric Forklift</h2>
                                    <button className="more">more</button>
                                </div>
                            </section>
                    </div>
                    
                </div>
</div>
)
    }
    export default MainContent;