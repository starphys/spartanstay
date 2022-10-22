import React,{useState} from "react";
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types';
import "../LogIn.css";

function LogIn({setToken}) {
  

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[validPass,setValidPass]=useState(true)
  const[accountLoggedIn,setAcccountLoggedIn]=useState(false)
  
  
  const handleClick=(e)=>{
    e.preventDefault()
    
    if(password===''){
      setValidPass(false)
    }
    else{
      setValidPass(true)
      const customer ={email,password}
      console.log(customer)
      const token = accountLoggedIn({
        email,
        password
      });
      setToken(token)
      fetch ("http://localhost:8080/credentials/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(customer)
      }).then(()=>{
         setAcccountLoggedIn(true)
        })
      }
}


  return (
  
    <div className="LogIn">
      
      <div className="LogInForm">
        <label><b>Login</b></label>
        <input className="LogInInput" type="text" placeholder="Email" name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required></input>

        <br></br>
        <br></br>
        
        <input className="LogInInput" type="password" placeholder="Password" name="psw" value={password}
        onChange={(e)=>setPassword(e.target.value)} required></input>
        <br></br>
        <br></br>
        
        <label className="text">Remember me</label>
        <input className="LogInCheckbox" type="checkbox" id="Remember me" name="rem"></input>
       
        
        {accountLoggedIn ? <Alert key='success' className="success-msg" variant='success'>Welcome {email}!</Alert> : ""}
        {validPass ? '': <Alert key='danger' className="error-msg" variant='danger'>Please enter valid password or email.</Alert>}
        
        <button onClick={handleClick}>Login</button>
        
        <label className="text">Not a member? <a href=" /sign-up"> Sign up now!</a></label>
        
      </div>
    </div>
  );
}
LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default LogIn;