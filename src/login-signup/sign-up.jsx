import { useState } from "react";
function SignUp(){
    const [username,setusername]=useState("");
    const [phonenumber,setusernumber]=useState("");
    const [password,setpassword]=useState("");
    const [email,setemail]=useState("");
    const [ispending,handlepending]=useState(false)
const handleSubmit =(e)=>{
  const user = { username,email,phonenumber,password}
  fetch(`  http://localhost:8000/users`,{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(user)
  }).then(()=>{
    handlepending(false)
  })
}

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" name="username" value={username} placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" name="email" placeholder="name@gmail.com"  onChange={(e)=>setemail(e.target.value)}></input>
                <label htmlFor="phone-number">phone number</label>
                <input type="text" name="phone-number" value={phonenumber} placeholder="0000-000-0000"  onChange={(e)=>setusernumber(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" name="password" placeholder="**********"  onChange={(e)=>setpassword(e.target.value)}></input>
               { !ispending && <button className="signup-btn">Sign up</button> } 
               {ispending && <button className="signup-btn">Signing up</button>}
            </form>
           
            <h3>Dont have an account? <a href="#">Sign Up</a></h3>
        </div>
  
    )
}
export default SignUp;