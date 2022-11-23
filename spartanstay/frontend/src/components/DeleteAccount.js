import {useNavigate} from "react-router-dom"

function DeleteAccount({token, setToken, setBookings, setSavedPayments}) {
    const navigate=useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/credentials/delete/" + token.id, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }
        ).then((response) => {
            response.json()
        }).then((data) => console.log(data))
        .then(() => {
            localStorage.removeItem('token')
            setToken(null)
            setBookings(null)
            setSavedPayments([])
            navigate('/login')
        })
    }
    return <button class = "log-out-button" onClick={handleClick}> Delete Account</button>
}
export default DeleteAccount 