import {useNavigate} from "react-router-dom"

function LogOut ({setToken, setBookings, setSavedPayments, setResults}) {
    const navigate=useNavigate();
    
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        setToken(null)
        setBookings(null)
        setSavedPayments([])
        setResults(null)
        navigate('/login')
    }
    
    return (
        <button class = "log-out-button" onClick={handleLogout} to='/login'>Logout</button>
    )
}

export default LogOut