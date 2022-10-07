import { Link } from "react-router-dom";
import "../LogIn.css";

function LogIn() {
  return (
  
    <div className="LogIn">
      
      <div className="LogInForm">
        <label><b>Login</b></label>
        <input className="LogInInput" type="text" placeholder="Email" name="email" required></input>
        <br></br>
        <br></br>
        
        <input className="LogInInput" type="password" placeholder="Password" name="psw" required></input>
        <br></br>
        <br></br>
        
        <label className="text">Remember me</label>
        <input className="LogInCheckbox" type="checkbox" id="Remember me" name="rem"></input>
       
        
        
        
        
        <button>Login</button>
        
        <label className="text">Not a member? <a href="/sign-up">Sign up now</a></label>
        
      </div>
    </div>
  );
}
export default LogIn;