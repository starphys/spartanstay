import React,{useState} from 'react'
function Reservation() {
    const [specialReq, setSpecialReq] = useState('')
    
    //room data
    const roomType=0
    const numAdult=0
    const numChildren=0
    const checkInDate=0
    const checkOutDate=0
    const phoneNum = 0
    //const specialReq=0 done

    //user details data
    const email=0
    const firstName=0
    const lastName=0

    //payment data
    const creditCardNum=0
    const expDate=0
    const securityCode=0
    const address=0


    const handleClick = (e) => {
        e.preventDefault()
        const reservation = {roomType,numAdult,numChildren,checkInDate,checkOutDate,email,phoneNum,specialReq,firstName,lastName,creditCardNum,expDate,securityCode,address}
        fetch("http://localhost:8080/reservation/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reservation)
        }
        ).then((response) => {
            response.json()
        }).then((data) => console.log(data))
    }
    return (

        <div>
            <input type="text" placeholder="Special Request" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)}></input>
            <button onClick={handleClick}> Book</button>
        </div>  
        
    );
}

export default Reservation