import {useNavigate} from "react-router-dom"

function MyBookings({token, bookings, setBookings}) {
    const navigate=useNavigate();
    
    const handleRedirect = (e) => {
        e.preventDefault();
        navigate('/search')
    }

    //This doesn't work great but it does work and we're out of time
    if(!bookings) {
        fetch(`http://localhost:8080/reservation/mybookings?id=${token.id}`)
        .then((response)=>{
        return response.json()
        }).then(data => {setBookings(data); return data}).then(data => console.log(data))
    }

  return (<div className="">
    {(bookings && bookings.length) ? bookings.map(booking => (<div><div>{booking.address}</div><img class="imageChange" src={booking.image} alt="img" /><div>{booking.totalCost}</div></div>))
        : <button onClick={handleRedirect} to='/login'>Make a Reservation!</button>} <br/></div> );
}

export default MyBookings;