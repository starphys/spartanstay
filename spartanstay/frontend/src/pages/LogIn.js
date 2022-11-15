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
        
        {/*<label className="text">Remember me</label>
        <input className="LogInCheckbox" type="checkbox" id="Remember me" name="rem"></input>*/}
       
        
        {accountLoggedIn ? <Alert key='success' className="success-msg" variant='success'>Welcome {token.firstName}!</Alert> : ""}
        {validPass ? '': <Alert key='danger' className="error-msg" variant='danger'>Please enter valid password and email.</Alert>}
        
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