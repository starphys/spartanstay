import React,{useState, useEffect} from 'react'
import "../style/reservation.css";
import Alert from 'react-bootstrap/Alert'

function Reservation({token, payment, hotel, setBookings, handleSuccess, search, setToken, cost}) {
    const today = new Date().toISOString().slice(0, 10)
    const maxDays = Math.floor(token.rewardPoints/cost)

    const [specialReq, setSpecialReq] = useState('')
    const [roomType, setRoomType] = useState('1 Queen Bed')
    const [numAdult, setNumAdult] = useState(search.adults)
    const [numChildren, setNumChildren] = useState(search.children)
    const [checkInDate, setCheckInDate] = useState(search.startDate)
    const [checkOutDate, setCheckOutDate] = useState(search.endDate)
    const [phoneNum, setPhoneNum] = useState('')
    const [fail, setFail] = useState(false)
    const [pointsSpend, setPointsSpend] = useState(cost)

    const cIDate = new Date(checkInDate)
    const cODate = new Date(checkOutDate)
    const diff = Math.ceil((cODate-cIDate)/(1000 * 3600 * 24))
    const days = diff > 0 ? diff : 1
    const tempCost = hotel.cost*days
    const pointsReward = Math.round(tempCost)


    if(!search) {
        search={adults:null, children:null, startDate:null,endDate:null}
    }

    const [pointsEarn, setPointsEarn] = useState(pointsReward)

    const findLastDay = () => {
        let lastDayForRewards = new Date(checkInDate)
        lastDayForRewards.setDate(lastDayForRewards.getDate() + maxDays)
        return lastDayForRewards.toISOString().slice(0,10)
    }

    const [maxCheckOutDate, setMaxCheckOutDate] = useState(findLastDay())

    const handleClick = (e) => {
        e.preventDefault()
        const cIDate = new Date(checkInDate)
        const cODate = new Date(checkOutDate)
        const diff = Math.ceil((cODate-cIDate)/(1000 * 3600 * 24))
        const days = diff > 0 ? diff : 1
        const tempCost = hotel.cost*days
        const pointsCost = Math.round(tempCost)*10
        const totalCostValue = payment.paymentType === "Reward" ? 0 : (tempCost).toFixed(2)
        const totalCost = `$${totalCostValue}`
        console.log(`${hotel.cost}, ${checkOutDate}, ${checkInDate}, ${cODate-cIDate}, ${totalCost}, ${pointsCost}`)

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
        }).then((data) => {
            console.log(data); 
            if(data.status === "success"){
                if(payment.paymentType === "Reward") {
                    setToken({...token, rewardPoints:parseInt(token.rewardPoints)-pointsCost})
                    fetch(`http://localhost:8080/credentials/setrewards?id=${parseInt(token.id)}&rewardPoints=${-pointsCost}`
                    ).then(console.log(`Spent points ${pointsCost}`))
                }

                else {
                    setToken({...token, rewardPoints:parseInt(token.rewardPoints)+Math.round(totalCostValue)})
                    fetch(`http://localhost:8080/credentials/setrewards?id=${parseInt(token.id)}&rewardPoints=${Math.round(totalCostValue)}`
                    ).then(console.log(`Added points`))
                }
                handleSuccess(e);
                setFail(false);
            } 
            else {
                setFail(true)
            }
        }).then(() => {fetch(`http://localhost:8080/reservation/mybookings?id=${token.id}`)
        .then((response)=>{
        return response.json()
        }).then(data => {setBookings(data); return data}).then(data => console.log(data))})
    }

    useEffect(() => {
        let lastDayForRewards = new Date(checkInDate)
        lastDayForRewards.setDate(lastDayForRewards.getDate() + maxDays)
        setMaxCheckOutDate(lastDayForRewards.toISOString().slice(0,10));
        return () => console.log('CheckInDateChanged');
      }, [checkInDate, maxDays]) 

    useEffect(() => {
        if(payment.paymentType === "Reward" && maxCheckOutDate < checkOutDate) {
            setCheckOutDate(maxCheckOutDate)
            console.log(`set cod to max checkout date: ${maxCheckOutDate}`)
        }
        else if(checkInDate > checkOutDate) {
            setCheckOutDate(checkInDate)
            console.log(`set cod to checkin date: ${checkInDate}`)
        }
        const cIDate = new Date(checkInDate)
        const cODate = new Date(checkOutDate)
        const diff = Math.ceil((cODate-cIDate)/(1000 * 3600 * 24))
        const days = diff > 0 ? diff : 1
        const tempCost = hotel.cost*days

        const pointsCost = Math.round(tempCost)*10
        setPointsSpend(pointsCost)

        const pointsReward = Math.round(tempCost)
        setPointsEarn(pointsReward)

        
        return () => console.log('returning');
      }, [checkInDate, maxCheckOutDate, checkOutDate, payment, hotel]) 
    
    return (
        <div id="r-wrap">
            <header className="r-header">
            <div class="ReserveForm">
                
                <h2 class="r-title" >Reservation</h2>

                <div class = "rowR">
                <div class = "columnR">
                <label class="r-label">Choose Room Type:</label>
                <select class="roomType r-input-text" name="membership" id="membership" onChange={(e) => setRoomType(e.target.value)}>
                <option value="1 Queen Bed">1 Queen Bed Room</option>
                <option value="2 Queen Beds ">2 Queen Beds Standard</option>
                <option value="1 King Bed Suite">1 King Bed Suite</option>
                <option value="1 King Bed Suite Addl Living Area">1 King Bed Suite Addl Living Area</option>
                </select>
                </div>
                
                
                
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
                <input class="r-input-text" type="date" placeholder="MM/DD/YEAR" min={today} value={checkInDate ? checkInDate : search.startDate} onChange={(e) => {setCheckInDate(e.target.value)}}></input> 

                </div>

                <div class = "columnR">
                <label class="r-label" for="CheckOut">Check-Out Date:</label>
                <input class="r-input-text" type="date" placeholder="MM/DD/YEAR" min={checkInDate ? checkInDate : today} value={checkOutDate ? checkOutDate : search.endDate} max={payment.paymentType === "Reward" ? maxCheckOutDate : ""} onChange={(e) => setCheckOutDate(e.target.value)}></input> 
                </div>

                <div class = "columnR">
                <label class="r-label" for="PhoneNum">Phone Number</label>
                <input class="r-input-text" type="tel" placeholder="XXX-XXX-XXXX" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}></input> 
                </div>
                </div> 
                

                
                <label class="r-label" for="SpecialReq">Special Request:</label>
                <input class="r-input-text" type="text" placeholder="Special Request" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)}></input> 

            {fail ? <Alert key='danger' className="error-msg" variant='danger'>You already have a reservation at another location overlapping these days. Please cancel that reservation to book this.</Alert> : ""}
            <div class="Rbutton_container">
            {payment.paymentType === "Reward" ? <button class="Rbtn" onClick={handleClick}><span>Book for {pointsSpend} Points!</span></button> : <button class="Rbtn" onClick={handleClick}><span>Book and Earn {pointsEarn} Points!</span></button> }
            </div>
            <br></br>
            
            </div>
            </header>
            </div>
    );
}

export default Reservation