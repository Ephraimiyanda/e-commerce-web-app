import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import welcomePic from "../../images/welcome-pic.png";
import { useContext } from "react";
import { CartContext } from "../cart-components/cartContext";

function Login() {
  const [switchSignups, setSwitchSignups] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [farmerEmail, setFarmerEmail] = useState("");
  const [farmerPassword, setFarmerPassword] = useState("");
  const [farmerLoginMessage, setFarmerLoginMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

const {handleProfile}=useContext(CartContext)

  async function onLogin(e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/users?email=${email}&password=${password}`,
      { method: "GET" }
    );
    const customer = await response.json();
    console.log(customer);

    if (customer.length > 0) {
      setLoginMessage(<p className="login-message">Welcome back</p>);
      setLoggedIn(true);
      handleProfile(customer);
      localStorage.setItem("user",JSON.stringify(customer))
    } else {
      setLoginMessage(
        <p className="login-message wrong">
          Wrong email or password entered
        </p>
      );
    }
  }

  async function onLoginForFarmers(e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/farmers?email=${email}&password=${password}`,
      { method: "GET" }
    );
    const farmers = await response.json();
    console.log(farmers);

    if (farmers.length > 0) {
      setFarmerLoginMessage(
        <p className="login-message">Welcome back</p>);
      setLoggedIn(true);
      handleProfile(farmers);
      localStorage.setItem("user",JSON.stringify(farmers))
    } else {
      setFarmerLoginMessage(
        <p className="login-message wrong">
          Wrong email or password entered
        </p>
      );
    }
  }

  if (loggedIn) {
    return <Redirect to="/Homepage" />;
  }

  return (
    <div className="signUpLogin">
      <div className="img-signupLogin">
        <img src={welcomePic} alt="" />
      </div>

      <div className="signup-section">
        <div className="details">
          <h2>AGRIFIED</h2>
          <h3>E-FARM</h3>
        
       </div>
            <h2>Sign In</h2>
            <div className="type">
              <button
                className={`type-button ${
                  switchSignups ? "" : "customer"
                }`}
                onClick={() => setSwitchSignups(false)}
              >
                Customer
              </button>
              <button
                className={`type-button ${
                  switchSignups ? "customer" : ""
                }`}
                onClick={() => setSwitchSignups(true)}
              >
                Farmer
              </button>
            </div>
<div>
<div className={switchSignups ?"no-display": "login-container"}>
              <form onSubmit={onLogin}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="farmer-password">Password</label>
                <input type="password" name="farmer-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {loginMessage}
                <button className="signup-btn">Sign In</button>
              </form>
              <h3>Don't have an account?<Link to="/signUp">SIGN UP</Link></h3>
           </div>
    
<div className={switchSignups ? "login-container" : "no-display"}>
              <form onSubmit={onLoginForFarmers}>
                <label htmlFor="email">Farmer email</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="farmer-password">Password</label>
                <input type="password" name="farmer-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {farmerLoginMessage}
                <button className="signup-btn">Sign In</button>
              </form>
              <h3>Don't have an account?<Link to="/signUp">SIGN UP</Link></h3>
           </div>
</div>
</div>
</div>

  )
            }
            export default Login;