import SignUp from "./sign-up";
import Login from "./login";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

function showLoginSignUp(){
    return(
<div>
<div>
        <div className="img">
            <h1>Welcome to</h1>
            <img className="img-signup" src="./images/signup/Rectangle 6 (1).png" alt="" height="710px" width="600px"></img>
            <h2>AGRIFIED</h2>
            <h3>E-FARM</h3>
        </div>
        <div className="details">
            <h2>Sign Up/Sign In</h2>
            <div className="type">
                <button>Customer</button>
                <button>farmer</button>
            </div>
        </div>
        </div>
        <Router>
            <Switch>
                <Route path="/" component={Login}></Route>
                <Route path="/signup" component={SignUp}></Route>
            </Switch>
        </Router>
</div>
    )
}