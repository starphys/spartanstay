import Navbar from "./Navbar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import Search from "./components/Search"
import CancelPolicy from "./pages/CancelPolicy"
import LogIn from "./pages/LogIn"
import Account from "./pages/Account"
import MyBookings from "./pages/MyBookings"
import Reservation from "./components/reservation"

import { Route, Routes } from "react-router-dom"
import useToken from "./useToken"
import {useState} from "react"

function App() {
  const {token, setToken} = useToken();
  const [results, setResults] = useState(null)
  const [bookings, setBookings] = useState(null)

  const [success, setSuccess] = useState(false)
  const payment = {
    cardNum:1111111111111111,
    expDate:"2022-12-25",
    securityCode:808,
    address:"123 Here Street, AK USA"
  }

  return (
    <>
      <Navbar token={token}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/search" element={<Search results={results} setResults={setResults}/>} />
          <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
          <Route path="/about" element={<About />} />
          <Route path = "/cancellations" element={<CancelPolicy />} />
          <Route path="/login" element={<LogIn token={token} setToken={setToken}/>} />
          <Route path="/account" element={<Account setToken={setToken} setBookings={setBookings}/>} />
          <Route path="/mybookings" element={<MyBookings bookings={bookings} setBookings={setBookings} token={token}/>} />
          <Route path="/reservation" element={<Reservation token={token} payment={payment} hotelId={4} setSuccess={setSuccess}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
