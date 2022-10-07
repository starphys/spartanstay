import { Link } from "react-router-dom";
import "../SignUp.css";

function SignUp() {
  return (
  
    <div className="SignUp">
      
      <div className="SignUpForm">
        <label><b>Sign Up</b></label>
        <input className="SignUpInput" type="text" placeholder="First Name" name="fname" required></input>
        <br></br>
        <br></br>
        
        <input className="SignUpInput" type="text" placeholder="Last Name" name="lname" required></input>
        <br></br>
        <br></br>
        
        <input className="SignUpInput" type="text" placeholder="Email" name="email" required></input>
        <br></br>
        <br></br>
        
        <input className="SignUpInput" type="password" placeholder="Password" name="psw" required></input>
        <br></br>
        <br></br>
        <input className="SignUpInput" type="password" placeholder="Confirm Password" name="psw-confirm" required></input>
        <button>Sign up</button>
      </div>
    </div>
  );
}
export default SignUp;