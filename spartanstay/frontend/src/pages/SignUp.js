import { Link } from "react-router-dom";
import "../SignUp.css";
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';


function SignUp() {
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')

const handleClick=(e)=>{
  e.preventDefault()
  const customer={firstName,lastName,email,password,confirmPassword}
  console.log(customer)
  fetch("http://localhost:8080/credentials/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(customer)
    }).then(()=>{
      console.log("New Customer Added")
    })
    function formIsValid(){
      var pass=document.getElementById("pass-in").value;
      var passcon=document.getElementById("pass-con").value;
      if(pass == passcon){
        <Alert><h3>Success</h3></Alert>
        
      }
      else {
        <Alert><h3>Fail</h3></Alert>
      }
    } 
}

  return (
  
    <div className="SignUp">
      
      <div className="SignUpForm">
      <form name="RegistrationForm"  onsubmit="return formIsValid()" action="">
        <label><b>Sign Up</b></label>
        <input className="SignUpInput" type="text" placeholder="First Name" name="fname" value={firstName}
        onChange={(e)=>setFirstName(e.target.value)} required></input>
        <br></br>
        <br></br>

        <input className="SignUpInput" type="text" placeholder="Last Name" name="lname" value={lastName}
        onChange={(e)=>setLastName(e.target.value)} required></input>
        <br></br>
        <br></br>
        
        <input className="SignUpInput" type="text" placeholder="Email" name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required></input>
        <br></br>
        <br></br>
        
        <input className="SignUpInput" id="pass-in" type="password" placeholder="Password" name="psw" value={password}
        onChange={(e)=>setPassword(e.target.value)} required></input>
        <br></br>
        <br></br>

        <input className="SignUpInput" id="pass-con" type="password" placeholder="Confirm Password" name="psw-confirm" value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)} required></input>

        <button onClick={handleClick}>Sign up</button>
        </form>
      </div>
    </div>
    
  );
}
export default SignUp;
