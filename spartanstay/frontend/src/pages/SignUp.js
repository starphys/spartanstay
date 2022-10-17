import "../SignUp.css";
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'

function SignUp() {
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmPassword,setConfirmPassword]=useState('')
  
  const[validPass,setValidPass]=useState(true);
  const[accountCreated,setAccountCreated]=useState(false);

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
        body:JSON.stringify(customer)
        }).then(()=>{
          setAccountCreated(true)
        })
      }
  }
  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      itemvalues: [{}]
    });
  };
  
  return (
  
    <div className="SignUp">
      
      <div className="SignUpForm">
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

        {accountCreated ? <Alert key='success' className="success-msg" variant='success'>Account created for {firstName} {lastName}!</Alert> : ""}
        {validPass ? '': <Alert key='danger' className="error-msg" variant='danger'>Please enter valid matching passwords.</Alert>}

        <button onClick={handleReset} id="reset">Reset</button>
        <button onClick={handleClick}>Sign up</button>
      </div>
    </div>
    
  );
}
export default SignUp;
