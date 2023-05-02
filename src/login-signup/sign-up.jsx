import { useState } from "react";
function SignUp(){
    const [username,setusername]=useState("");
    const [phoneNumber,setusernumber]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [ispending,handlepending]=useState(false)
const handleSubmit =(e)=>{
    e.preventDefault();
  const user = { username,email,phoneNumber,password}
  fetch(`  http://localhost:8000/users`,{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(user)
  }).then(()=>{
    handlepending(false)
  })
}

    return(
        <div className="container">
        <div className="img">
            <h1>Welcome to</h1>
            <img src="./images/signup/Rectangle 6 (1).png" alt="" height="710px" width="600px"></img>
            <h2>AGRIFIED</h2>
            <h3>E-FARM</h3>
        </div>
        <div className="details">
            <h2>Sign Up/Sign In</h2>
            <div className="type">
                <button>Customer</button>
                <button>farmer</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" name="username" value={username} placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" name="email" placeholder="name@gmail.com"  onChange={(e)=>setemail(e.target.value)}></input>
                <label htmlFor="phone-number">phone number</label>
                <input type="text" name="phone-number" value={phoneNumber} placeholder="0000-000-0000"  onChange={(e)=>setusernumber(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" name="password" placeholder="**********"  onChange={(e)=>setpassword(e.target.value)}></input>
               { !ispending && <button className="in">Sign In</button> } 
               {ispending && <button>Signing in</button>}
            </form>
           
            <h3>Dont have an account? <a href="#">Sign Up</a></h3>
        </div>
    </div>
    )
}
export default SignUp;