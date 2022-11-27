// const myBooking = {roomType,numAdult,numChildren,checkInDate,checkOutDate,phoneNum,specialReq,totalCost,
//     email:token.email,firstName:token.firstName,lastName:token.lastName,userId:token.id,
//     creditCardNum:payment.cardNum,expDate:payment.expDate,securityCode:payment.securityCode,address:payment.address,
//     hotelId: hotel.id, image: hotel.image
// }

import { useState } from "react";
import "../style/Booking.css";
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
        setCancel(false)
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
                    <div class="edit-booking-box" >
                    <div class="edit-b-box">

                            <body>
                                <div class="BookingForm">

                                    <h2 class="r-title2-b">Edit Booking {booking.id}</h2>

                                    <div class = "rowR2-b">
                                    <div class = "columnR2-b">
                                    <label class="r-label-b">Choose Room Type:</label>
                                    <select class="roomType r-input-text-b" name="membership" id="membership" onChange={(e) => booking.roomType=(e.target.value)}>
                                    <option value="1 Queen Bed">1 Queen Bed Room</option>
                                    <option value="2 Queen Beds ">2 Queen Beds Standard</option>
                                    <option value="1 King Bed Suite">1 King Bed Suite</option>
                                    <option value="1 King Bed Suite Addl Living Area">1 King Bed Suite Addl Living Area</option>
                                    </select>
                                    </div>
                                        
                                    <div class = "columnR2-b">
                                    <label class="r-label-b" for="NumberAdults">Number of Adults:</label>
                                    <input class="r-input-text-b" type="number"  placeholder={booking.numAdult} onChange={(e) => booking.numAdult=(e.target.value)}></input>
                                    </div>
                                        
                                    <div class = "columnR2-b">
                                    <label class="r-label-b" for="NumberChildren">Number of Children:</label>
                                    <input class="r-input-text-b" type="number" placeholder={booking.numChildren} onChange={(e) => booking.numChildren=(e.target.value)}></input>
                                    </div>
                                    </div>

                                    

                                    <div class = "rowR3-b">
                                    <div class = "columnR4-b">                                  
                                    <label class="r-label-b" for="PhoneNum">Phone Number</label>
                                    <input class="r-input-text-b" type="tel" placeholder={booking.phoneNum} onChange={(e) => booking.phoneNum=(e.target.value)}></input>
                                    </div>
                                    <div class = "columnR3-b">
                                    <label class="r-label-b" for="SpecialReq">Special Request:</label>
                                    <div>
                                        <input class="r-input-text-b" type="text" placeholder={booking.specialReq} onChange={(e) => booking.specialReq=(e.target.value)}></input> 
                                    </div>


                                    </div>
                                    </div>


                                    
                       
                                    
                                    <div>

                                        <button class = "booking-button" onClick={handleSave}>Save Reservation</button>
                                    </div>
                                </div>
                            </body>           
                        {/* </div> */}
                    </div>   
                    </div>
                </div>
        )   
    }
    else {
        return (
            <div>
                <div class="booking-box" >
                <div class="b-box">
                    <div>
                        <div class="col-L-b"><div class=""><img class="image-before-edit-b" src={booking.image} alt="img" /></div></div><br />
                        <div class="BookingForm">

                                    
                                       <div class = "rowR-before-hotel-b">
                                       <div class = "columnR-before-hotel">
                                    <h2><label></label>
                                        <div >{booking.hotelName}</div></h2>
                                        </div>
                                        </div>
                                        <div class = "rowR-before-edit-b">
                                        <div class = "columnR-before-edit-b">
                                        <div class="r-input-text-id-b">Booking ID: {booking.id}</div>
                                        </div>
                                        
                                        <div class = "columnR-b">  
                                        <div class="r-input-text-cost-b">Total Cost: {booking.totalCost}</div>
                                    </div>
                                    </div>
                                        
                                        

                                  
                                    {/* <div class = "rowR">  */}

                                    


                                    <div class = "rowR-before-edit-b">
                                    <div class = "columnR-before-edit-b">
                                        <label class="r-label-b" for="NumberAdults">Number of Adults:</label>
                                        <div class="r-input-text-b">{booking.numAdult}</div>
                                        </div>
                                        
                                        <div class = "columnR-b">
                                        <label class="r-label-b" for="NumberChildren">Number of Children:</label>
                                        <div class="r-input-text-b">{booking.numChildren}</div>
                                    </div>
                                    </div>


                                    <div class = "rowR-before-edit-b">
                                    <div class = "columnR-before-edit-b">
                                    <label class="r-label-b" for="CheckIn">Check-In Date:</label>
                                        <div class="r-input-text-b">{cIDate.toLocaleString('default', { month: 'long' })} {cIDate.getDate()}, {cIDate.getFullYear()}
                                        </div>
                                    </div>


                                    <div class = "columnR-b">
                                    <label class="r-label-b" for="CheckOut">Check-Out Date:</label>
                                        <div class="r-input-text-b">{cODate.toLocaleString('default', { month: 'long' })} {cODate.getDate()}, {cODate.getFullYear()}
                                        </div>
                                    </div>
                                    </div>
                                                                        
                                   
                                    
                                  
                                    
                                                              
                                    <div id="buttons-b" class="col-L3"><h4 class="h4">
                                    <div>{dateDiff <= 0 ? "" :
                                        <div>
                                            <button class = "booking-button" onClick={handleEdit}> Edit Reservation</button>

                                            {cancel ? <>
                                                <Alert key='dark' className="booking-msg" variant='dark'>Canceling today entitles you to a {dateDiff >= 3 ? booking.totalCost : `$${(parseFloat(booking.totalCost.substring(1))*.85).toFixed(2)}`
                                                } refund.</Alert>
                                                <button class = "booking-button" onClick={handleConfirm}>Confirm Cancel</button> </>
                                                : <button class = "booking-button"onClick={handleCancel}> Cancel Reservation</button>}
                                        
                                        </div>
                                    }</div></h4>
                                    
                                    </div>

                                </div>

                            <body>
                                
                            </body>       
                            
                                </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Booking