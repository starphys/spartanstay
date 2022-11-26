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
      const customer={firstName,lastName,email,password,confirmPassword,rewardPoints:0}
      console.log(customer)
      fetch("http://localhost:8080/credentials/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(customer)})
        .then((response)=>{ return response.json()})
        .then(data => {
          if(data.status === "success") {
            console.log(data);
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
  
    <div className="SignUp">
      
      <div className="SignUpForm">
        <label className="su-label"><b>Sign up</b></label>
        

        <input className="su-input" type="text" placeholder="First Name" name="fname" value={firstName}
        onChange={(e)=>setFirstName(e.target.value)} required></input>
        <br></br>
        <br></br>

        <input  className="su-input" type="text" placeholder="Last Name" name="lname" value={lastName}
        onChange={(e)=>setLastName(e.target.value)} required></input>
        <br></br>
        <br></br>
        
        <input  className="su-input" type="text" placeholder="Email" name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required></input>
        <br></br>
        <br></br>
        
        <input  className="su-input" id="pass-in" type="password" placeholder="Password" name="psw" value={password}
        onChange={(e)=>setPassword(e.target.value)} required></input>
        <br></br>
        <br></br>

        <input  className="su-input" id="pass-con" type="password" placeholder="Confirm Password" name="psw-confirm" value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)} required></input>

        {accountCreated ? <Alert key='success' className="success-msg" variant='success'>Account created for {firstName} {lastName}!</Alert> : ""}
        {validPass ? '': <Alert key='danger' className="error-msg" variant='danger'>Please enter valid matching passwords.</Alert>}
        {validEmail ? '': <Alert key='danger' className="error-msg" variant='danger'>Email already in use.</Alert>}

        <button className="su-button" onClick={handleReset} id="reset">Reset</button>
        <button className="su-button" onClick={handleClick}>Sign up</button>
      </div>
    </div>
    
  );
}
export default SignUp;
