import Navbar from "./Navbar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import Payment from "./pages/Payment"
import React, { useState } from 'react';
import Search from "./components/Search"
import CancelPolicy from "./pages/CancelPolicy"
import LogIn from "./pages/LogIn"
import Account from "./pages/Account"
import MyBookings from "./pages/MyBookings"
import Reservation from "./components/reservation"
import { Route, Routes } from "react-router-dom"
import useToken from "./useToken"

function App() {
  const [payment,setPayment] = useState('')
  const {token, setToken} = useToken();
  const [results, setResults] = useState(null)
  const [bookings, setBookings] = useState(null)
  const [success, setSuccess] = useState(false)
  
  const paymentTemp = {
    cardNum:1111111111111111,
    expDate:"2022-12-25",
    securityCode:808,
    address:"123 Here Street, AK USA"
  }

  const hotel = {
    cost: 64.99,
    image: "https://exp.cdn-hotels.com/hotels/1000000/990000/982600/982537/a8559c2d_z.jpg?impolicy=fcrop&w=250&h=140&q=high",
    id:1,
    name:"Hagerman Ranch"
  }

  return (
    <>
      <Navbar token={token}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/search" element={<Search results={results} setResults={setResults} token={token} setBookings={setBookings}/>} />
          <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment token={token} setPayment={setPayment} />} />
          <Route path = "/cancellations" element={<CancelPolicy />} />
          <Route path="/login" element={<LogIn token={token} setToken={setToken}/>} />
          <Route path="/account" element={<Account setToken={setToken} setBookings={setBookings}/>} />
          <Route path="/mybookings" element={<MyBookings bookings={bookings} setBookings={setBookings} token={token}/>} />
          <Route path="/reservation" element={<Reservation token={token} payment={paymentTemp} hotel={hotel} setSuccess={setSuccess} setBookings={setBookings}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
