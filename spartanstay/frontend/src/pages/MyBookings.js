import { useNavigate } from "react-router-dom"
import Booking from "../components/Booking";


function MyBookings({token, bookings, setBookings}) {
    const navigate=useNavigate();
    
    const handleRedirect = (e) => {
        e.preventDefault();
        navigate('/search')
    }
    // const myBooking = {roomType,numAdult,numChildren,checkInDate,checkOutDate,phoneNum,specialReq,totalCost,
    //     email:token.email,firstName:token.firstName,lastName:token.lastName,userId:token.id,
    //     creditCardNum:payment.cardNum,expDate:payment.expDate,securityCode:payment.securityCode,address:payment.address,
    //     hotelId:hotel.id, image:hotel.image}

    //This doesn't work great but it does work and we're out of time
    if(!bookings) {
        fetch(`http://localhost:8080/reservation/mybookings?id=${token.id}`)
        .then((response)=>{
        return response.json()
        }).then(data => {setBookings(data); return data}).then(data => console.log(data))
    }

  return (<div className="">
      {(bookings && bookings.length) ? bookings.map(booking => (<Booking setBookings={setBookings }booking={booking}/>))
          : <button onClick={handleRedirect} to='/login'>Make a Reservation!</button>} <br /></div>);
    
    
    
}

export default MyBookings;