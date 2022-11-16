// const myBooking = {roomType,numAdult,numChildren,checkInDate,checkOutDate,phoneNum,specialReq,totalCost,
//     email:token.email,firstName:token.firstName,lastName:token.lastName,userId:token.id,
//     creditCardNum:payment.cardNum,expDate:payment.expDate,securityCode:payment.securityCode,address:payment.address,
//     hotelId: hotel.id, image: hotel.image
// }

import { useState } from "react";
import "./Booking.css";
import Alert from 'react-bootstrap/Alert'


function Booking({ booking,setBookings}) {
    const [edit, setEdit]=useState(false)
    const today = new Date()
    const [cancel, setCancel] = useState(false)


    const cIDate = new Date(booking.checkInDate)
    const cODate = new Date(booking.checkOutDate)
    const dateDiff = Math.ceil((cIDate - today) / (1000 * 3600 * 24))

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(true)
    }

    const handleConfirm = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/reservation/cancel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booking)
        }
        ).then((response) => {
            return response.json()
        }).then((data) => {console.log(data)})
        .then(() => {fetch(`http://localhost:8080/reservation/mybookings?id=${booking.userId}`)
        .then((response)=>{
        return response.json()
        }).then(data => {setBookings(data); return data}).then(data => console.log(data))})
        setCancel(false)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setCancel(true)
    }

    const handleSave = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/reservation/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(booking)
        }
        ).then((response) => {
            return response.json()
        }).then((data) => {console.log(data)})
        .then(() => {fetch(`http://localhost:8080/reservation/mybookings?id=${booking.userId}`)
        .then((response)=>{
        return response.json()
        }).then(data => {setBookings(data); return data}).then(data => console.log(data))})
        setEdit(false)
    }

    if (edit) {
        return (
            <div>
                <div id='resp-table'>
                    <div id='resp-table-header'>
                        <div class='table-header-cell'>
                        
                        </div>
                        <div class='table-header-cell'>
                            Hotel Name
                        </div>
                        <div class='table-header-cell'>
                            Room Type
                        </div>
                        <div class='table-header-cell'>
                            Check-In Date
                        </div>
                        <div class='table-header-cell'>
                            Check-Out Date
                        </div>
                        <div class='table-header-cell'>
                            Number of Adults
                        </div>
                        <div class='table-header-cell'>
                            Number of Children
                        </div>
                        <div class='table-header-cell'>
                            Special Request
                        </div>
                        <div class='table-header-cell'>
                            Phone Number
                        </div>
                        <div class='table-header-cell'>
                            Price
                        </div>
                        <div class='table-header-cell'>
                            Confirmation Number
                        </div>
                    </div>
                    <div id='resp-table-body'>
                        <div class='resp-table-row'>
                            <img class="imageChange, table-body-cell" src={booking.image} alt="img" />
                            <div className='table-body-cell'>{booking.hotelName}</div>
                            <div className='table-body-cell'>
                                <select name="membership" id="membership" onChange={(e) => booking.roomType=(e.target.value)}>
                                <option value="1 Queen Bed">1 Queen Bed Room</option>
                                <option value="2 Queen Beds ">2 Queen Beds Standard</option>
                                <option value="1 King Bed Suite">1 King Bed Suite</option>
                                <option value="1 King Bed Suite Addl Living Area">1 King Bed Suite Addl Living Area</option>
                                </select>
                            </div>
                            <div className='table-body-cell'>{cIDate.toLocaleString('default', { month: 'long' })} {cIDate.getDate()}, {cIDate.getFullYear()}</div>
                            <div className='table-body-cell'>{cODate.toLocaleString('default', { month: 'long' })} {cODate.getDate()}, {cODate.getFullYear()}</div>
                            <div className='table-body-cell'>
                                <input type="number" placeholder={booking.numAdult} onChange={(e) => booking.numAdult=(e.target.value)}></input>
                            </div>
                            <div className='table-body-cell'>
                                <input type="number" placeholder={booking.numChildren} onChange={(e) => booking.numChildren=(e.target.value)}></input>
                            </div>
                            <div className='table-body-cell'>{booking.specialReq}
                            <input type="text" placeholder={booking.specialReq} onChange={(e) => booking.specialReq=(e.target.value)}></input> 
                            </div>
                            <div className='table-body-cell'>{booking.phoneNum}
                                <input type="tel" placeholder={booking.phoneNum} onChange={(e) => booking.phoneNum=(e.target.value)}></input> 
                            </div>
                            <div className='table-body-cell'>{booking.totalCost}</div>
                            <div className='table-body-cell'>{booking.id}</div>
                        </div>
                    </div>
                </div>
                    <div>
                    <button onClick={handleSave}>Save Reservation</button>
                    </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div id='resp-table'>
                    <div id='resp-table-header'>
                        <div class='table-header-cell'>
                        
                        </div>
                        <div class='table-header-cell'>
                            Hotel Name
                        </div>
                        <div class='table-header-cell'>
                            Room Type
                        </div>
                        <div class='table-header-cell'>
                            Check-In Date
                        </div>
                        <div class='table-header-cell'>
                            Check-Out Date
                        </div>
                        <div class='table-header-cell'>
                            Number of Adults
                        </div>
                        <div class='table-header-cell'>
                            Number of Children
                        </div>
                        <div class='table-header-cell'>
                            Special Request
                        </div>
                        <div class='table-header-cell'>
                            Phone Number
                        </div>
                        <div class='table-header-cell'>
                            Price
                        </div>
                        <div class='table-header-cell'>
                            Confirmation Number
                        </div>
                    </div>
                    <div id='resp-table-body'>
                        <div class='resp-table-row'>
                            <img class="imageChange, table-body-cell" src={booking.image} alt="img" />
                            <div className='table-body-cell'>{booking.hotelName}</div>
                            <div className='table-body-cell'>{booking.roomType}</div>
                            <div className='table-body-cell'>{cIDate.toLocaleString('default', { month: 'long' })} {cIDate.getDate()}, {cIDate.getFullYear()}</div>
                            <div className='table-body-cell'>{cODate.toLocaleString('default', { month: 'long' })} {cODate.getDate()}, {cODate.getFullYear()}</div>
                            <div className='table-body-cell'>{booking.numAdult}</div>
                            <div className='table-body-cell'>{booking.numChildren}</div>
                            <div className='table-body-cell'>{booking.specialReq}</div>
                            <div className='table-body-cell'>{booking.phoneNum}</div>
                            <div className='table-body-cell'>{booking.totalCost}</div>
                            <div className='table-body-cell'>{booking.id}</div>
                        </div>
                    </div>
                </div>
                {dateDiff <= 0 ? "" :
                    <div>
                        <button onClick={handleEdit}> Edit Reservation</button>

                        {cancel ? <>
                            <Alert key='dark' className="booking-msg" variant='dark'>Canceling today entitles you to a {dateDiff >= 3 ? booking.totalCost : `$${(parseFloat(booking.totalCost.substring(1))*.85).toFixed(2)}` 
                            } refund.</Alert>
                            <button onClick={handleConfirm}>Confirm Cancel</button> </>
                            : <button onClick={handleCancel}> Cancel Reservation</button>}
                    
                    </div>
                }
            </div>
        )
    }

}

export default Booking
    
