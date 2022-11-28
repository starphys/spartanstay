import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types';
import "../style/LogIn.css";
import { BsFillExclamationCircleFill } from "react-icons/bs";

function LogIn({token, setToken, setSavedPayments}) {
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
          fetch(`http://localhost:8080/payments/getCardDetails?userId=${data.id}&paymentType=type`)
          .then((response)=>{return response.json()})
          .then(resp => {
            setSavedPayments(resp);           
            setAcccountLoggedIn(true)
            setValidPass(true)
            navigate('/')
          })
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
     
     
     <div id="lo-wrap">
            
    
        <header className="l-header">
        
        <div class="image-div">
        {/* <p class="l-quote">LikeHome, <pre></pre><pre></pre> an <pre></pre><pre></pre>experience <pre></pre><pre></pre>like<pre></pre><pre></pre> none <pre></pre><pre></pre>other</p> */}
        <p class="l-quote">LikeHome, a hotel experience like <pre></pre>none other</p>
          </div>
        <div class="" id="login-form">
        <label className="l-label">Welcome to LikeHome</label>
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
        {validPass ? '': <Alert key='danger' className="error-msg loginAlert" variant='danger'><BsFillExclamationCircleFill style={{marginRight: 5, width: 14, height: 14 }}/>Please enter valid password and email.</Alert>}
        
        <button className="login-button" onClick={handleClick}><span class="neonTextLI" >Log In</span></button>
        
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