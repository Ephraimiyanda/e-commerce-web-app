import SignUp from "./sign-up";
import Login from "./login";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import { Link } from "react-router-dom";
import welcomePic from "../../images/welcome-pic.png"
function showLoginSignUp(){
 
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
        <Router>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={SignUp}></Route>
            </Switch>
        </Router>
       </div>
</div>
    )
}
export default showLoginSignUp;