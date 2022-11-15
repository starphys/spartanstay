import "../style/cancellation.css";
import React from 'react';


function CancelPolicy() {
    return (
        <>
        <div class="fill"><h1 class = "cancellation-header">Cancellation Policy</h1></div>
   <div>
   
    <div class="x" >
        <h2 id="marginFix" class = "h2-cancellation">Cancelling with Advance Notice</h2>
        <ul class = "ul-cancellation">
            <li>You will be fully refunded for any cancellations at least 72 hours before your check-in date.</li>
        </ul> 
        
        <h2 class = "h2-cancellation">Late Cancellation Fee</h2>
        <ul class = "ul-cancellation">
        <li>Any cancellations within 72 hours of your check-in date but before your check-in date will be assessed a 15% cancellation fee. The rest of the cost of your reservation will be refunded.</li> </ul>

        <h2 class = "h2-cancellation">No Cancellation After Check-in Date</h2> 
        <ul class = "bottomAdded">
        <li>We will not be able to offer a refund for cancellations on or after your check-in date, even if you do not keep your reservation.</li>
        </ul>     
    </div>
    </div>
    </>
    
    );
  }
  
  export default CancelPolicy;