import { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import welcomePic from "../../images/welcome-pic.png"
import { useContext } from "react";
import { CartContext } from "../cart-components/cartContext";
function SignUp(){
    const [username,setusername]=useState("");
    const [phonenumber,setusernumber]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [retypePassword,setretype]=useState("");
    const [ispending,handlepending]=useState(false)
    const [shopname,setshopname]=useState("");
    const [switchsignups,setswitch]=useState(false);
    const [loggedIn,setloggedIn]=useState(false);
    const [isCustomer,setIsCustomer]=useState()
    const now = new Date();
    const month =now.toLocaleString("default",{month:"long"});
    const year =now.getFullYear()
    const day=now.getDate();
    const {handleProfile}=useContext(CartContext)

    function flipSwitch(){
        setswitch(false)
    }
    function flipSwitchBack(){
        setswitch(true)
    }
  const  DateJoined = `${day} of ${month} ${year}`;

const handleSubmit =(e)=>{
  const user = { username,email,phonenumber,password,DateJoined,isCustomer}
  const storedUser = [user]
  fetch(`  http://localhost:3000/users`,{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(user)
  }).then(()=>{
    setloggedIn(true)
    handleProfile(storedUser);
    localStorage.setItem("user",JSON.stringify(storedUser))
  })
.catch()

  if(loggedIn){
    return <Redirect to="/Homepage" />
}
}


const handleSubmitForFarmers=(e)=>{
    const farmer = { username,email,shopname,phonenumber,password,DateJoined,isCustomer}
    const storedfarmer=[farmer]
    fetch(`http://localhost:3000/farmers`,{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(farmer)
    }).then(()=>{
      setloggedIn(true)
      handleProfile(storedfarmer);
      localStorage.setItem("user",JSON.stringify(storedfarmer))
    })
.catch()
}

if(loggedIn){
    return <Redirect to="/Homepage" />
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
<h2>Sign Up</h2>
<div className="type">
               <button className={switchsignups? "type-button ":"type-button customer"} onClick={flipSwitch}>Customer</button>
              <button  className={switchsignups?"type-button customer" :"type-button "} onClick={flipSwitchBack} >farmer</button>
            </div>

<div className={switchsignups ?"no-display":"login-container" }>

            <form onSubmit={(e)=>{
               
                e.preventDefault()
                setIsCustomer(true)
                if(password === retypePassword && isCustomer){
                  
                  handleSubmit();
                    
                }else {
                    alert("no match")
                }
            }}>
                <label htmlFor="username">username</label>
                <input type="text" name="username" value={username} placeholder="username" onChange={(e)=>setusername(e.target.value)} minLength={5}/>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" name="email" placeholder="name@gmail.com"  onChange={(e)=>setemail(e.target.value)}></input>
                <label htmlFor="phone-number">phone number</label>
                <input type="text" name="phone-number" value={phonenumber} placeholder="0000-000-0000"  onChange={(e)=>setusernumber(e.target.value)} minLength={11}/>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" name="password" placeholder="**********"  onChange={(e)=>setpassword(e.target.value)} minLength={5}></input>
                <label htmlFor="re-type password">confirm password</label>
                <input  type="password" name="re-type password" placeholder="**********" value={retypePassword}  onChange={(e)=>setretype(e.target.value)}/>
               { !ispending && <button className="signup-btn">Sign up</button> } 
               {ispending && <button className="signup-btn">Signing up</button>}
            </form>
           
            <h3>Already have an account?<Link to="/login">SIGN IN</Link></h3>
        </div>

        <div className={switchsignups ?"login-container" :"no-display"}>

            <form onSubmit={(e)=>{
              setIsCustomer(false)
             e.preventDefault()
                if(password===retypePassword && !isCustomer){
                  
                  handleSubmitForFarmers();
                    
                }else{
                    alert("password does not match")
                }
                
            }}>
                <label htmlFor="shopname">Shop name</label>
                <input type="text" name="shopname" placeholder="shop name" value={shopname} onChange={(e)=>setshopname(e.target.value)} />
                <label htmlFor="username">username</label>
                <input type="text" name="username" value={username} placeholder="username" onChange={(e)=>setusername(e.target.value)} minLength={5}/>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" name="email" placeholder="name@gmail.com"  onChange={(e)=>setemail(e.target.value)}></input>
                <label htmlFor="phone-number">phone number</label>
                <input type="text" name="phone-number" value={phonenumber} placeholder="0000-000-0000"  onChange={(e)=>setusernumber(e.target.value)} minLength={11}/>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" name="password" placeholder="**********"  onChange={(e)=>setpassword(e.target.value)} minLength={5}></input>
                <label htmlFor="re-type password">confirm password</label>
                <input  type="password" name="re-type password" placeholder="**********" value={retypePassword}  onChange={(e)=>setretype(e.target.value)}/>
               { !ispending && <button className="signup-btn">Sign up</button> } 
               {ispending && <button className="signup-btn">Signing up</button>}
            </form>
           
            <h3>Already have an account?<Link to="/login">SIGN IN</Link></h3>
        </div>
</div>
  </div>
    )
}
export default SignUp;