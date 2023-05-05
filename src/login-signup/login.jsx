import { useState } from "react";
import { Link, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import welcomePic from "../../images/welcome-pic.png"
function Login(){
    const[switchsignups,setswitch]=useState(false);
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[login, setlogin]=useState("")
    const[farmerEmail,setFarmerEmail]=useState("")
    const[farmerPassword,setFarmerPassword]=useState("");
    const[farmerLogin,setFarmerlogin]=useState("");
    const[loggedIn,setloggedIn]=useState(false);
    function flipSwitch(){
        setswitch(false)
    }
    function flipSwitchBack(){
        setswitch(true)
    }

    async function OnLogin(e){
        e.preventDefault()
        const response = await fetch(`http://localhost:8000/users?email=${email}&password=${password}`,
        {method:"GET"}
        );
      const customer = await response.json();
      console.log(customer);

      setloggedIn(true);


if(customer.length>0){
    setlogin(<p className="login-message">welcome back</p>);
    
}else{
    setlogin(<p className="login-message wrong">wrong email or password entered</p>)
}

    }
if(loggedIn){
    return <Redirect to="/Homepage" />
}



    async function OnLoginForFarmers(e){
        e.preventDefault()
        const response = await fetch(`http://localhost:8000/farmers?farmerEmail=${farmerEmail}&farmerPassword=${farmerPassword}`,
        {method:"GET"}
        );
      const farmers = await response.json();
      console.log(farmers);

if(farmers.length>0){
    setFarmerlogin(<p className="login-message">welcome back</p>);
}else{
    setFarmerlogin(<p className="login-message wrong">wrong email or password entered</p>)
}
if(loggedIn){
    return <Redirect to="/Homepage" />
}
    }
    return(
     <div className="signUpLogin">
        <div className="img-signupLogin">
     <img  src={welcomePic} alt=""></img> 
    </div>

       <div className="signup-section">
       <div className="details">
       <h2>AGRIFIED</h2>
            <h3>E-FARM</h3>
            
        </div>
         <div>
          <div>
            <h2>Sign In</h2>
            <div className="type">
               <button className={switchsignups? "type-button ":"type-button customer"} onClick={flipSwitch}>Customer</button>
              <button className={switchsignups?"type-button customer" :"type-button "} onClick={flipSwitchBack} >farmer</button>
            </div>
            
            <div className={switchsignups ?"no-display":"login-container" }>
            <form onSubmit={OnLogin}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <label htmlFor="'password">Password</label>
                <input type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
              {login}
                <button className="signup-btn">sign In</button>
                <h3>Dont have an account?<Link to="/signUp">SIGN Up</Link></h3>        
            </form>
        </div>

        <div className={switchsignups ?"login-container":"no-display" }>
            <form onSubmit={OnLoginForFarmers}>
                <label htmlFor="email">Farmer email</label>
                <input type="text" name="email" value={farmerEmail} onChange={(e)=>setFarmerEmail(e.target.value)}/>
                <label htmlFor="farmer-password">Password</label>
                <input type="password" name="farmer-password" value={farmerPassword} onChange={(e)=>setFarmerPassword(e.target.value)}/>
                {farmerLogin}
                <button className="signup-btn">sign In</button>
            </form>
            <h3>Dont have an account?<Link to="/signUp">SIGN Up</Link></h3>        
        </div>
      
       </div>
       
      </div>
     </div>
     </div>
    )
}
export default Login;