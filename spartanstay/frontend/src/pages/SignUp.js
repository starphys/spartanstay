import "../style/SignUp.css";
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from "react-router-dom";

function SignUp({setToken}) {
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')
  
  const[validPass,setValidPass]=useState(true)
  const[validEmail,setValidEmail]=useState(true)
  const[accountCreated,setAccountCreated]=useState(false)

  const navigate = useNavigate()

  const handleClick=(e)=>{
    e.preventDefault()
    if(password === '' || password !== confirmPassword){
      setValidPass(false)
    }
    else{
      setValidPass(true)
      const customer={firstName,lastName,email,password,confirmPassword}
      console.log(customer)
      fetch("http://localhost:8080/credentials/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(customer)})
        .then((response)=>{ return response.json()})
        .then(data => {
          if(data.status === "success") {
            setToken(data); 
            setAccountCreated(true); 
            setValidEmail(true);
            navigate('/');
          }
          else {
            setValidEmail(false);
          }
        })}
  }
  const handleReset = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setValidPass(true)
    setAccountCreated(false)
  };
  
  return (
  
    <div class="SignUp">
    <div className="s-container">
     
     
     <div id="s-wrap">

     <header className="s-header">
        
        <div class="s-image-div">
        <h2 class="s-quote">LikeHome is a company with values around hospitality</h2>
          </div>
        <div class="" id="signup-form">
        <label className="su-label su-name">Become a LikeHome member</label>

        <div class="rowSU">
          <div class="columnSU">
        <label className="su-label sDetailsLabel" id="">First Name</label>
        <input className="su-input" type="text" placeholder="John" name="fname" value={firstName}
        onChange={(e)=>setFirstName(e.target.value)} required></input>
        <br></br>
        <br></br>
        </div>
        <div class="columnSU">
        <label className="su-label sDetailsLabel" id="">Last Name</label>
        <input  className="su-input" type="text" placeholder="Doe" name="lname" value={lastName}
        onChange={(e)=>setLastName(e.target.value)} required></input>
        <br></br>
        <br></br>
        </div>
        </div>
        
        <label className="su-label sDetailsLabel su-email" id="">Email</label>
        <input  className="su-input su-email-input" type="text" placeholder="johndoe@gmail.com" name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required></input>
        <br></br>
        <br></br>
        
        <div class="rowSU">
          <div class="columnSU">
          <label className="su-label sDetailsLabel" id="sDetailsLabel2">Password</label>
        <input  className="su-input" id="pass-in" type="password" placeholder="********" name="psw" value={password}
        onChange={(e)=>setPassword(e.target.value)} required></input>
        <br></br>
        <br></br>
        </div>
        <div class="columnSU">
        <label className="su-label sDetailsLabel" id="sDetailsLabel2">Confirm Password</label>
        <input  className="su-input" id="pass-con" type="password" placeholder="********" name="psw-confirm" value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)} required></input>
        </div>
        </div>
        <div class="linkDiv"><a className="linkClear" onClick={handleReset} id="reset">Clear data</a></div>
        {accountCreated ? <Alert key='success' className="success-msg" variant='success'>Account created for {firstName} {lastName}!</Alert> : ""}
        {validPass ? '': <Alert key='danger' className="error-msg" variant='danger'>Please enter valid matching passwords.</Alert>}
        {validEmail ? '': <Alert key='danger' className="error-msg" variant='danger'>Email already in use.</Alert>}

        
        <button className="su-button" onClick={handleClick}><span class="neonTextSU" >Sign up</span></button>

        </div>
      
      </header>
      </div>
    </div>
    </div>
    
  );
}
export default SignUp;
