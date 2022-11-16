import Navbar from "./Navbar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
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
  const {token, setToken} = useToken();
  const [results, setResults] = useState(null)
  const [bookings, setBookings] = useState(null)
  const [search, setSearch] = useState(null)
  const [savedPayments, setSavedPayments] = useState([])

  return (
    <>
      <Navbar token={token}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/search" element={<Search savedPayments={savedPayments} results={results} setResults={setResults} token={token} setBookings={setBookings} search={search} setSearch={setSearch}/>} />
          <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
          <Route path = "/cancellations" element={<CancelPolicy />} />
          <Route path="/login" element={<LogIn token={token} setToken={setToken} setSavedPayments={setSavedPayments}/>} />
          <Route path="/account" element={<Account token={token} setToken={setToken} setBookings={setBookings} setSavedPayments={setSavedPayments}/>} />
          <Route path="/mybookings" element={<MyBookings bookings={bookings} setBookings={setBookings} token={token}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
