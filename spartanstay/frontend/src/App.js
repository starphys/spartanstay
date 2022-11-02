import Navbar from "./Navbar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import Payment from "./pages/Payment"
import React, { useState } from 'react';
import LogIn from "./pages/LogIn"
import Account from "./pages/Account"
import { Route, Routes } from "react-router-dom"
import useToken from "./useToken"

function App() {
  const [payment,setPayment] = useState('')
  const {token, setToken} = useToken();

  return (
    <>
      <Navbar token={token}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment token={token} setPayment={setPayment} />} />
          <Route path="/login" element={<LogIn token={token} setToken={setToken}/>} />
          <Route path="/account" element={<Account setToken={setToken}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
