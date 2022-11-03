import React,{useState} from 'react'
function Reservation({token, payment, hotelId, setSuccess}) {
    //room data
    const [specialReq, setSpecialReq] = useState('')
    const [roomType, setRoomType] = useState('')
    const [numAdult, setNumAdult] = useState('')
    const [numChildren, setNumChildren] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setcheckOutDate] = useState('')
    const [phoneNum, setPhoneNum] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const reservation = {roomType,numAdult,numChildren,checkInDate,checkOutDate,phoneNum,specialReq,
            email:token.email,firstName:token.firstName,lastName:token.lastName,userId:token.id,
            creditCardNum:payment.cardNum,expDate:payment.expDate,securityCode:payment.securityCode,address:payment.address,
            hotelId}
        fetch("http://localhost:8080/reservation/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reservation)
        }
        ).then((response) => {
            return response.json()
        }).then((data) => {console.log(data); if(data.status === "success"){setSuccess(true)} else {setSuccess(false)} })
    }
    return (
        //<React.Fragment>
            
            <div id="form">
                <h2>Reservation</h2>
                <form>
                        {/* <label for="Name">First Name:</label>
                        <input type="text" placeholder="Sammy" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input> 
                        
                        <label for="Name">Last Name:</label>
                        <input type="text" placeholder="Spartan" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>  */}
                    
                        <label>Choose Room Type:</label>
                        <select name="membership" id="membership" onChange={(e) => setRoomType(e.target.value)}>
                        <option value="1 Queen Bed">1 Queen Bed Room</option>
                        <option value="2 Queen Beds ">2 Queen Beds Standard</option>
                        <option value="1 King Bed Suite">1 King Bed Suite</option>
                        <option value="1 King Bed Suite Addl Living Area">1 King Bed Suite Addl Living Area</option>
                        </select>
                        
                        <label for="SpecialReq">Special Request:</label>
                        <input type="text" placeholder="Special Request" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)}></input> 
                    
                        
                        <label for="NumberAdults">Number of Adults:</label>
                        <input type="number" placeholder="Number of Adults" value={numAdult} onChange={(e) => setNumAdult(e.target.value)}></input> 
                        
                        <label for="NumberChildren">Number of Children:</label>
                        <input type="number" placeholder="Number of Children" value={numChildren} onChange={(e) => setNumChildren(e.target.value)}></input> 
                        
                        <label for="CheckIn">Check-In Date:</label>
                        <input type="date" placeholder="MM/DD/YEAR" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}></input> 
                        
                        <label for="CheckOut">Check-Out Date:</label>
                        <input type="date" placeholder="MM/DD/YEAR" value={checkOutDate} onChange={(e) => setcheckOutDate(e.target.value)}></input> 
                        
                        <label for="PhoneNum">Phone Number</label>
                        <input type="tel" placeholder="XXX-XXX-XXXX" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}></input> 
                        
                        {/* <label for="Email">Email</label>
                        <input type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>  */}
                        
                        {/* <label for="CardNum">Credit Card Number</label>
                        <input type="text" placeholder="1234-5678-9123-4567" value={creditCardNum} onChange={(e) => setCreditCardNum(e.target.value)}></input>     
                        
                        <label for="CardNum">Credit Card Number</label>
                        <input type="text" placeholder="1234-5678-9123-4567" value={creditCardNum} onChange={(e) => setCreditCardNum(e.target.value)}></input>   

                                                Card Expiration:
                        <select name='expireMM' id='expireMM'>
                            <option value=''>Month</option>
                            <option value='01'>January</option>
                            <option value='02'>February</option>
                            <option value='03'>March</option>
                            <option value='04'>April</option>
                            <option value='05'>May</option>
                            <option value='06'>June</option>
                            <option value='07'>July</option>
                            <option value='08'>August</option>
                            <option value='09'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                        </select> 
                        <select name='expireYY' id='expireYY'>
                            <option value=''>Year</option>
                            <option value='20'>2020</option>
                            <option value='21'>2021</option>
                            <option value='22'>2022</option>
                            <option value='23'>2023</option>
                            <option value='24'>2024</option>
                        </select> 
                        <input class="inputCard" type="hidden" name="expiry" id="expiry" maxlength="4"/>
                    
             */}
                    <button onClick={handleClick}> Book</button>
                </form>
            </div>
        //</React.Fragment> 
    );
}

export default Reservation