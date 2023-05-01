import Item from "./product-components/product";


function MainContent(){


    return(
<div className="content-container">
   
<div>
            <div className="header--text">
                <h1>Linkages between <span className="green">farmers</span>  and <span className="green"> consumers </span></h1>
                <button className="header--btn"><a href="./agric/first.html">Get Started</a></button>
            </div>

    <div className="search-content"> </div><div className="products" id="products">
                <h1 className="fruits" href="fruits">Fruits</h1>
                <div id="firstrow">

         < Item  productType="fruit"  />
   
              </div>
            </div><div className="products">
                <h1>Vegetables</h1>
                <div id="firstrow">
         < Item   productType="vegetable"  />
     
      </div>
            </div>
            <div className="products">
                <h1>spicies</h1>
                <div id="firstrow">
         < Item  productType="spice"  />
    
                    </div>
            </div>
            <div className="products">
                <h1>Grains</h1>
                <div id="firstrow">
                
         < Item   productType="grain"  />
     
               </div>
            </div>
            <div className="products">
                <h1>cereals</h1>
                <div id="firstrow">
         < Item  productType="cereal"  />
     
                </div>
            </div><div className="service">
                <h2>Hiring Service</h2>
                <div className="h-service">
                    <div className="track">
                        <img className="tractor" src="./images/tractor.png" alt=""></img>
                            <div className="circles">
                                <img className="purple-circle" src="./images/Ellipse 132.png" alt=""></img>
                                    <img className="yellow-circle" src="./images/Ellipse 128.png" alt=""></img>
                                        <img className="red-circle" src="./images/Ellipse 129.png" alt=""></img>
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
                            <img className="machines" src="./images/one.png" alt=""></img>
                                <div className="white-bground">
                                    <h2>Borehole loader</h2>
                                    <button className="more">more</button>
                                </div>
                            </section>

                        <section>
                            <img className="machines" src="./images/two.png" alt=""></img>
                                <div className="white-bground">
                                    <h2>Wheel loader</h2>
                                    <button className="more">more</button>
                                </div>
                            </section>

                        <section>
                            <img className="machines" src="./images/three.png" alt=""></img>
                                <div className="white-bground">
                                    <h2>Diesel forklift</h2>
                                    <button className="more">more</button>
                                </div>
                            </section>

                        <section>
                            <img className="lift" src="./images/four.png" alt=""></img>
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