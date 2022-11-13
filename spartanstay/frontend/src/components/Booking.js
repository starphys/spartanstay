// const myBooking = {roomType,numAdult,numChildren,checkInDate,checkOutDate,phoneNum,specialReq,totalCost,
//     email:token.email,firstName:token.firstName,lastName:token.lastName,userId:token.id,
//     creditCardNum:payment.cardNum,expDate:payment.expDate,securityCode:payment.securityCode,address:payment.address,
//     hotelId: hotel.id, image: hotel.image
// }

import "./Booking.css";
    
function Booking({ booking }) {
    const today = new Date()

    const cIDate = new Date(booking.checkInDate)
    const cODate = new Date(booking.checkOutDate)
    const dateDiff = Math.ceil((cIDate-today)/(1000 * 3600 * 24))

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
                    <button> Edit Reservation</button>
                    <button> Delete Reservation</button>
                </div>
            }
        </div>
    )
}

export default Booking
    
