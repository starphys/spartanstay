import Navbar from "./Navbar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import About from "./pages/About"
import Search from "./components/Search"
import LogIn from "./pages/LogIn"
import Account from "./pages/Account"

import { Route, Routes } from "react-router-dom"
import useToken from "./useToken"


function App() {
  const {token, setToken} = useToken();

  return (
    <>
      <Navbar token={token}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/search" element={<Search />} />
          <Route path="/sign-up" element={<SignUp setToken={setToken} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn token={token} setToken={setToken}/>} />
          <Route path="/account" element={<Account setToken={setToken}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
