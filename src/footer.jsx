import twitter from "../images/social media/twitter.png"
import instagram from "../images/social media/ig.png"
import facebook from "../images/social media/facebook.png"
function Footer(){
    return(
       <div>
        <footer>
        <div className="footer-links">
   <div className="footer-div">
       <div className="Category-links">
           <span>Categories</span>
           <div className="last-links">
              <a href="">fruits</a>
              <a href="">Vegetables</a>
              <a href="">Spices</a>
              <a href="">Grains</a>
              <a href="">Cereals</a>
              <a href="">Tubers</a>
           </div>
          </div>
   
         <div className="company-links">
           <span>Company</span>
           <div className="last-links">
               <a href="./Aboutus.html"> About us</a>
              <a href=""> Contact us</a>
              <a href=""> Loyalty program</a>
              <a href="">Chat with farmers</a>
           </div>
         </div>
   
         <div className="makeMoney-links">
           <span>Make With Money Agrified</span>
           <div className="last-links">
               <a href="#">Loyalty program</a>
               <a href="#">Become a seller</a>
               <a href="#">Education</a>
           </div>
         </div>
   
   </div>
             <div className="social-links">
               <div>
                   <span>join us on</span>
               <div className="join-us">
                   <img className="social-media" href="#" src={twitter} alt="" width="20px"></img>
                   <img className="social-media" href="#" src={instagram} alt="" width="20px"></img>
                   <img className="social-media" href="#" src={facebook} alt="" width="20px"></img>
               </div>
               </div>
               
              <p>PAYMENT METHODS & DELIVERY PARTNERS</p>
           </div>
        </div>

       </footer>
       </div>
    )
}
export default Footer;