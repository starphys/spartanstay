import {useNavigate} from "react-router-dom"

function LogOut ({setToken}) {
    const navigate=useNavigate();
    
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        setToken(null)
        navigate('/login')
    }
    
    return (
        <button onClick={handleLogout} to='/login'>Logout</button>
    )
}

export default LogOut