import React,{useState} from 'react'
import "../style/reservation.css";
import Alert from 'react-bootstrap/Alert'

function Reservation({token, payment, hotel, setBookings, handleSuccess, search}) {
    const today = new Date().toISOString().slice(0, 10)
    if(!search) {
        search={adults:null, children:null, startDate:null,endDate:null}
    }

    const [specialReq, setSpecialReq] = useState('')
    const [roomType, setRoomType] = useState('')
    const [numAdult, setNumAdult] = useState(search.adults)
    const [numChildren, setNumChildren] = useState(search.children)
    const [checkInDate, setCheckInDate] = useState(search.startDate)
    const [checkOutDate, setCheckOutDate] = useState(search.endDate)
    const [phoneNum, setPhoneNum] = useState('')
    const [fail, setFail] = useState(false)


    const handleClick = (e) => {
        e.preventDefault()
        const cIDate = new Date(checkInDate)
        const cODate = new Date(checkOutDate)
        const tempCost = hotel.cost*Math.ceil((cODate-cIDate)/(1000 * 3600 * 24))
        const totalCost = `$${(tempCost > 0 ? tempCost : hotel.cost).toFixed(2)}`
        console.log(`${hotel.cost}, ${checkOutDate}, ${checkInDate}, ${cODate-cIDate}, ${totalCost}`)

        const reservation = {roomType,numAdult,numChildren,checkInDate,checkOutDate,phoneNum,specialReq,totalCost,
            email:token.email,firstName:token.firstName,lastName:token.lastName,userId:token.id,
            creditCardNum:payment.cardNum,expDate:payment.expDate,securityCode:payment.securityCode,address:payment.address,
            hotelId:hotel.id, image:hotel.image, hotelName:hotel.name}
        fetch("http://localhost:8080/reservation/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reservation)
        }
        ).then((response) => {
            return response.json()
        }).then((data) => {console.log(data); if(data.status === "success"){handleSuccess(e); setFail(false)} else {setFail(true)}})
        .then(() => {fetch(`http://localhost:8080/reservation/mybookings?id=${token.id}`)
        .then((response)=>{
        return response.json()
        }).then(data => {setBookings(data); return data}).then(data => console.log(data))})
    }
    return (
        <div id="wrap">
            <header className="p-header">
            <div class="ReserveForm">
            
                <h2>Reservation</h2>

                <label class="r-label">Choose Room Type:</label>
                <select class="roomType r-input-text" name="membership" id="membership" onChange={(e) => setRoomType(e.target.value)}>
                <option value="1 Queen Bed">1 Queen Bed Room</option>
                <option value="2 Queen Beds ">2 Queen Beds Standard</option>
                <option value="1 King Bed Suite">1 King Bed Suite</option>
                <option value="1 King Bed Suite Addl Living Area">1 King Bed Suite Addl Living Area</option>
                </select>
                
                <label class="r-label" for="SpecialReq">Special Request:</label>
                <input class="r-input-text" type="text" placeholder="Special Request" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)}></input> 
            
                <div class = "rowR">
                <div class = "columnR">
                <label class="r-label" for="NumberAdults">Number of Adults:</label>
                <input class="r-input-text" type="number" placeholder="Number of Adults" value={numAdult > 0 ? numAdult : search.adults} onChange={(e) => setNumAdult(e.target.value)}></input>
                </div>

                <div class = "columnR">
                <label class="r-label" for="NumberChildren">Number of Children:</label>
                <input class="r-input-text" type="number" placeholder="Number of Children" value={numChildren > 0 ? numChildren : search.children} onChange={(e) => setNumChildren(e.target.value)}></input>
                </div>
                </div> 
                

                <div class = "rowR">
                <div class = "columnR">
                <label class="r-label" for="CheckIn">Check-In Date:</label>
                <input class="r-input-text" type="date" placeholder="MM/DD/YEAR"  min={today} value={checkInDate ? checkInDate : search.startDate} onChange={(e) => {setCheckInDate(e.target.value); if(e.target.value > checkOutDate) {setCheckOutDate(e.target.value)}}}></input>  
                </div>

                <div class = "columnR">
                <label class="r-label" for="CheckOut">Check-Out Date:</label>
                <input class="r-input-text" type="date" placeholder="MM/DD/YEAR" min={checkInDate ? checkInDate : today} value={checkOutDate ? checkOutDate : search.endDate} onChange={(e) => setCheckOutDate(e.target.value)}></input> 
                </div>
                </div> 
                

                <label class="r-label" for="PhoneNum">Phone Number</label>
                <input class="r-input-text" type="tel" placeholder="XXX-XXX-XXXX" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}></input> 
                
            {fail ? <Alert key='danger' className="error-msg" variant='danger'>You already have a reservation at another location overlapping these days. Please cancel that reservation to book this.</Alert> : ""}
            <div class="Rbutton_container">
	            <button class="Rbtn" onClick={handleClick}><span>Reserve Booking</span></button>
            </div>
            <br></br>
            
            </div>
            </header>
            </div>
    );
}

export default Reservation