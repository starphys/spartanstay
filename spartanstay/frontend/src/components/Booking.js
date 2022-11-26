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
                    <div class="booking-box" >
                    <div class="b-box">

                        <div>
                            <div class="col-L"><div class=""><img class="image" src={booking.image} alt="img" /></div>
                        </div><br/> 
                            <div id="col-L2" class="col-S"><h3 class="h3">{booking.hotelName}</h3><br/> 
                        <br/></div>
                        </div>

                        <div id="wrap">

                            {/* //pop up edit box */}
                            <header className="p-header">
                                <div class="ReserveForm">

                                <h2>Edit Reservation</h2>
                                   
                                    <label class="r-label">Choose Room Type:</label>
                                    <select class="roomType r-input-text" name="membership" id="membership" onChange={(e) => booking.roomType=(e.target.value)}>
                                    <option value="1 Queen Bed">1 Queen Bed Room</option>
                                    <option value="2 Queen Beds ">2 Queen Beds Standard</option>
                                    <option value="1 King Bed Suite">1 King Bed Suite</option>
                                    <option value="1 King Bed Suite Addl Living Area">1 King Bed Suite Addl Living Area</option>
                                    </select>

                                    <label class="r-label" for="SpecialReq">Special Request:</label>
                                    <div>
                                        <input class="r-input-text" type="text" placeholder={booking.specialReq} onChange={(e) => booking.specialReq=(e.target.value)}></input> 
                                    </div>

                                    <div class = "rowR">
                                    <div class = "columnR">
                                        <label class="r-label" for="NumberAdults">Number of Adults:</label>
                                        <input class="r-input-text" type="number"  placeholder={booking.numAdult} onChange={(e) => booking.numAdult=(e.target.value)}></input>
                                        </div>
                                        
                                        <div class = "columnR">
                                        <label class="r-label" for="NumberChildren">Number of Children:</label>
                                        <input class="r-input-text" type="number" placeholder={booking.numChildren} onChange={(e) => booking.numChildren=(e.target.value)}></input>
                                    </div>
                                    </div>


                                    <div class = "rowR">
                                    <div class = "columnR">
                                    <label class="r-label" for="CheckIn">Check-In Date:</label>
                                        <div class="r-input-text">{cIDate.toLocaleString('default', { month: 'long' })} {cIDate.getDate()}, {cIDate.getFullYear()}
                                        </div>
                                    </div>
                            
                       
                                    <div class = "columnR">
                                    <label class="r-label" for="CheckOut">Check-Out Date:</label>
                                        <div class="r-input-text">{cODate.toLocaleString('default', { month: 'long' })} {cODate.getDate()}, {cODate.getFullYear()}
                                        </div>
                                    </div>
                                    </div>
                                                                        
                                    <label class="r-label" for="PhoneNum">Phone Number</label>
                                    <input class="r-input-text" type="tel" placeholder={booking.phoneNum} onChange={(e) => booking.phoneNum=(e.target.value)}></input>
                                    
                                    <div class = "rowR">
                                    <div class = "columnR">
                                    <label class="r-label">Total Cost</label>
                                        <div class="r-input-text">{booking.totalCost}</div>
                                    </div>    
                                    
                                    <div class = "columnR">
                                    <label class="r-label">Booking:</label>
                                        <div class="r-input-text">{booking.id}</div>
                                    </div>
                                    </div>
                                        

                                    <div>
                                        <button class = "booking-button" onClick={handleSave}>Save Reservation</button>
                                    </div>
                                </div>
                            </header>            
                        </div>
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
                        <div class="col-L"><div class=""><img class="image" src={booking.image} alt="img" /></div></div><br />
                        
                        {/* <div id="col-L2" class="col-S"><h3 class="h3">{booking.hotelName}</h3><br />
                        <br/></div> */}

                        <div id="wrap">

                            {/* //pop up edit box */}
                            {/* <header className="p-header"> */}
                                <div class="ReserveForm">

                                    <h2>Booking Information</h2>

                                  
                                    {/* <div class = "rowR">  */}

                                    <label class="r-label">Hotel Name:</label>
                                        <div class="r-input-text">{booking.hotelName}</div>    
                                    {/* </div>    */}

                                    
                                    <label class="r-label" for="SpecialReq">Special Request:</label>
                                    <div>
                                        <div class="r-input-text">{booking.specialReq}</div>
                                    </div>

                                    <div class = "rowR">
                                    <div class = "columnR">
                                        <label class="r-label" for="NumberAdults">Number of Adults:</label>
                                        <div class="r-input-text">{booking.numAdult}</div>
                                        </div>
                                        
                                        <div class = "columnR">
                                        <label class="r-label" for="NumberChildren">Number of Children:</label>
                                        <div class="r-input-text">{booking.numChildren}</div>
                                    </div>
                                    </div>


                                    <div class = "rowR">
                                    <div class = "columnR">
                                    <label class="r-label" for="CheckIn">Check-In Date:</label>
                                        <div class="r-input-text">{cIDate.toLocaleString('default', { month: 'long' })} {cIDate.getDate()}, {cIDate.getFullYear()}
                                        </div>
                                    </div>


                                    <div class = "columnR">
                                    <label class="r-label" for="CheckOut">Check-Out Date:</label>
                                        <div class="r-input-text">{cODate.toLocaleString('default', { month: 'long' })} {cODate.getDate()}, {cODate.getFullYear()}
                                        </div>
                                    </div>
                                    </div>
                                                                        
                                    <label class="r-label" for="PhoneNum">Phone Number</label>
                                    <div class="r-input-text">{booking.phoneNum}</div>
                                    
                                    <div class = "rowR">
                                    <div class = "columnR">
                                    <label class="r-label">Total Cost</label>
                                        <div class="r-input-text">{booking.totalCost}</div>
                                    </div>    
                                    
                                    <div class = "columnR">
                                    <label class="r-label">Booking:</label>
                                        <div class="r-input-text">{booking.id}</div>
                                    </div>
                                    </div>
                                    
                                                                
                                    <div id="buttons" class="col-L3"><h4 class="h4">
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
                            {/* </header>             */}
                            </div>
                        {/* <form>
                        
                            <div id="col-L2" class="col-S"><strong>Special Request:</strong>{booking.specialReq}</div>
                            <div class="divNew"><strong>Number of Adults:</strong>{booking.numAdult}</div>
                            <div class="divNew"><strong>Number of Children:</strong>{booking.numChildren}</div>
        
                            <div class="divNew"><strong>Check-In Date:</strong>
                                <div class="r-input-text">{cIDate.toLocaleString('default', { month: 'long' })} {cODate.getDate()}, {cODate.getFullYear()}
                                </div>
                            </div>
                            <div class="divNew"><strong>Check-Out Date:</strong>                                        
                                <div class="r-input-text">{cODate.toLocaleString('default', { month: 'long' })} {cODate.getDate()}, {cODate.getFullYear()}
                                </div>
                                </div>
                                
                            <div class="divNew"><strong>Phone Number:</strong>{booking.phoneNum}</div>

                        </form>  */}
             
    


                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Booking