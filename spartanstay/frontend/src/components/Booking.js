// const myBooking = {roomType,numAdult,numChildren,checkInDate,checkOutDate,phoneNum,specialReq,totalCost,
//     email:token.email,firstName:token.firstName,lastName:token.lastName,userId:token.id,
//     creditCardNum:payment.cardNum,expDate:payment.expDate,securityCode:payment.securityCode,address:payment.address,
//     hotelId: hotel.id, image: hotel.image
// }

import "./Booking.css";
    


function Booking({ booking }) {
    return (
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
                    <div className='table-body-cell'>Hotel Name</div>
                    <div className='table-body-cell'>{booking.roomType}</div>
                    <div className='table-body-cell'>{booking.checkInDate}</div>
                    <div className='table-body-cell'>{booking.checkOutDate}</div>
                    <div className='table-body-cell'>{booking.numAdult}</div>
                    <div className='table-body-cell'>{booking.numChildren}</div>
                    <div className='table-body-cell'>{booking.specialReq}</div>
                    <div className='table-body-cell'>{booking.phoneNum}</div>
                    <div className='table-body-cell'>{booking.totalCost}</div>
                    <div className='table-body-cell'>{booking.id}</div>
                </div>
            </div>
        </div>

    )
    

}

export default Booking
    
