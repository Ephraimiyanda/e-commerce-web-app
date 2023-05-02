import SignUp from "./sign-up";
import Login from "./login";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import { Link } from "react-router-dom";
import welcomePic from "../../images/welcome-pic.png"
function showLoginSignUp(){
    return(
<div className="signUpLogin">
<div >
        <div className="img">
            <h1>Welcome to</h1>
            <img className="img-signupLogin" src={welcomePic} alt="" ></img>
            <h2>AGRIFIED</h2>
            <h3>E-FARM</h3>
        </div>
        <div className="details">
            <h2>Sign Up/Sign In</h2>
            <div className="type">
               <Link to="/signup"> <button>Customer</button></Link>
                <Link to="/login"><button>farmer</button></Link>
            </div>
        </div>
    </div>

       <div>
    
        <Router>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={SignUp}></Route>
            </Switch>
        </Router>
       </div>
</div>
    )
}
export default showLoginSignUp;