import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types';
import "../style/LogIn.css";

function LogIn({token, setToken}) {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[validPass,setValidPass]=useState(true)
  const[accountLoggedIn,setAcccountLoggedIn]=useState(false)

  const navigate = useNavigate()
  
  const handleClick=(e)=>{
    e.preventDefault()
    
    if(password===''){
      setValidPass(false)
    }
    else{
      fetch (`http://localhost:8080/credentials/login?email=${email}&password=${password}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"}})
        .then((response)=>{return response.json()})
        .then(data =>{
        
        if(data.id) {
          setToken(data)
          setAcccountLoggedIn(true)
          setValidPass(true)
          navigate('/')
        }
        else {
          setValidPass(false)
        }
       })
      }
  }

  return (
    <>
   
    <div class="LogIn">
    <div className="l-container">
     
     
     <div id="wrap">
            
    
        <header className="l-header">
        
        <div class="image-div">
        <h2 class="l-quote">Why go a different way, when you have got SpartanStay?</h2>
          </div>
        <div class="" id="login-form">
        <label className="l-label">Welcome to SpartanStay</label>
        <label className="l-label lDetailsLabel" id="">Email</label>
        <input className="l-input-text" type="text" placeholder="johndoe@gmail.com" name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required></input>

        <br></br>
        <br></br>
        <label className="l-label lDetailsLabel" id="lDetailsLabel2">Password</label>
        <input className="l-input-text" id="l2-input-text" type="password" placeholder="********" name="psw" value={password}
        onChange={(e)=>setPassword(e.target.value)} required></input>
        <br></br>
        <br></br>
        
        {accountLoggedIn ? <Alert key='success' className="success-msg" variant='success'>Welcome {token.firstName}!</Alert> : ""}
        {validPass ? '': <Alert key='danger' className="error-msg" variant='danger'>Please enter valid password and email.</Alert>}
        
        <button className="login-button" onClick={handleClick}>Sign in</button>
        
        <label className="l-label" id="secondLabel">Not a member? <a href=" /sign-up" className="sign-up-link"> Sign up now!</a></label>
        </div>
      
      </header>
      </div>

      </div>
      </div>
      </>
      
  );
}
LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
};
export default LogIn;