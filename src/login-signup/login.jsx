import { useState } from "react";
import { Link } from "react-router-dom";
function Login(){
    const [switchsignups,setswitch]=useState(false);


    function flipSwitch(){
        setswitch(false)
    }
    function flipSwitchBack(){
        setswitch(true)
    }
    return(
      <div>
          <div>
            <h2>Sign In</h2>
            <div className="type">
               <button className={switchsignups? "type-button ":"type-button customer"} onClick={flipSwitch}>Customer</button>
              <button className={switchsignups?"type-button customer" :"type-button "} onClick={flipSwitchBack} >farmer</button>
            </div>
            
            <div className={switchsignups ?"no-display":"login-container" }>
            <form >
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
                <label htmlFor="'password">Password</label>
                <input type="password" name="password" />
                <button className="signup-btn">sign In</button>
                <h3>Dont have an account?<Link to="/signup">SIGN Up</Link></h3>        
            </form>
        </div>

        <div className={switchsignups ?"login-container":"no-display" }>
            <form >
                <label htmlFor="email">Farmer email</label>
                <input type="text" name="email" />
                <label htmlFor="'password">Password</label>
                <input type="password" name="password" />
                <button className="signup-btn">sign In</button>
            </form>
            <h3>Dont have an account?<Link to="/signup">SIGN Up</Link></h3>        
        </div>
      
       </div>
       
      </div>
    )
}
export default Login;