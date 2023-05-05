import { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import welcomePic from "../../images/welcome-pic.png"
function SignUp(){
    const [username,setusername]=useState("");
    const [phonenumber,setusernumber]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const[farmerPassword,setFarmerPassword]=useState("");
    const[farmerEmail,setFarmerEmail]=useState("");
    const[retypePassword,setretype]=useState("");
    const [ispending,handlepending]=useState(false)
    const [shopname,setshopname]=useState("");
    const [switchsignups,setswitch]=useState(false);
    const[loggedIn,setloggedIn]=useState(false);


    function flipSwitch(){
        setswitch(false)
    }
    function flipSwitchBack(){
        setswitch(true)
    }
const handleSubmit =(e)=>{
  const user = { username,email,phonenumber,password,retypePassword}
  fetch(`  http://localhost:8000/users`,{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(user)
  }).then(()=>{
    handlepending(false)
    setloggedIn(true)
  })
.catch()
  if(loggedIn){
    return <Redirect to="/Homepage" />
}
}


const handleSubmitForFarmers=(e)=>{
    const farmer = { username,farmerEmail,shopname,phonenumber,farmerPassword,retypePassword}
    fetch(`http://localhost:8000/farmers`,{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(farmer)
    }).then(()=>{
      handlepending(false)
      setloggedIn(true)
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
                if(password===retypePassword){
                    handleSubmit();
                }else{
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
             e.preventDefault()
                if(password===retypePassword){
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
                <input value={farmerEmail} type="email" name="email" placeholder="name@gmail.com"  onChange={(e)=>setFarmerEmail(e.target.value)}></input>
                <label htmlFor="phone-number">phone number</label>
                <input type="text" name="phone-number" value={phonenumber} placeholder="0000-000-0000"  onChange={(e)=>setusernumber(e.target.value)} minLength={11}/>
                <label htmlFor="password">Password</label>
                <input value={farmerPassword} type="password" name="password" placeholder="**********"  onChange={(e)=>setFarmerPassword(e.target.value)} minLength={5}></input>
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