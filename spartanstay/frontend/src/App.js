import Navbar from "./Navbar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import Payment from "./pages/Payment"
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"


function App() {
  const [payment,setPayment] = useState('')
  const token = {
    id:1,
    email:"email@website.com",
    firstName:"Ian",
    lastName:"van Dyke",
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment token={token} setPayment={setPayment} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
