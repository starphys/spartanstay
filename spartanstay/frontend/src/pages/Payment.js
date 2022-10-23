
 import "../payment.css";
 import React, { Component } from 'react';
 import PaymentIcon from 'react-payment-icons';
 import { FaUser } from 'react-icons/fa';
 import { MdEmail } from 'react-icons/md';
 import { FaAddressCard } from 'react-icons/fa';
 import { FaCity } from 'react-icons/fa';




 function Payment() {
   return (
     <>
         <div class="fill" ><h1 class="neonText" >Payment Info</h1></div>

        <br></br>
        <div id="wrap">
           <form action="/action_page.php">
             <header>
               <div class="billingAddress">
                 <br></br>
                 <h3>Billing Address</h3>


               <label for="fname"><pre><FaUser size={15}/>  Full Name </pre></label>
              <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
              <label for="email"><pre><MdEmail size={20}/>  Email </pre></label>
             <input type="text" id="email" name="email" placeholder="john@example.com"></input>
             <label for="adr"><pre><FaAddressCard size={20}/>  Address </pre></label>
             <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
             <label for="city"><pre><FaCity size={20}/>  City</pre></label>
             <input type="text" id="city" name="city" placeholder="New York"></input>
             <div class="row">
               <div class="col-50">
                 <label for="state">State</label>
                 <input type="text" id="state" name="state" placeholder="NY"></input>
               </div>
               <div class="col-50">
                 <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001"></input>
                </div>
              </div>
               </div> 
             </header>
             <div id="main">
               <div class="billingAddress">
                 <br></br>
                 <h3>Payment</h3>
                 <label for="fname">Accepted Cards</label>
                 <div class="icon-container">
                 <PaymentIcon id="visa" style={{ marginTop: -5, margin: 5, width: 65, height: 65 }} className="payment-icon"/>
                 <PaymentIcon id="amex" style={{ margin: 5, width: 65, height: 65 }} className="payment-icon"/>
                 <PaymentIcon id="mastercard" style={{ margin: 5, width: 65, height: 65 }} className="payment-icon"/>
                 <PaymentIcon id="discover" style={{ margin: 5, width: 65, height: 65 }} className="payment-icon"/>


                 {/* <i class="fa fa-cc-visa"></i>
                 <i class="fa fa-cc-amex"></i>
                 <i class="fa fa-cc-mastercard"></i>
                 <i class="fa fa-cc-discover"></i> */}
                 </div>
              <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
              <label for="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
              <div class= "row">

                <div class="expcvv">
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                </div>
                <div class="expcvv">
                  <label for="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                </div>
                <div class="expcvv">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                </div>
              </div>
            </div>

          <div id="parent">
          <input class="child saveInput" id="element1" type="checkbox" checked="checked" name="sameadr"></input><label id="element2"class="child save">Shipping address same as billing</label>
          </div>
          <br></br>

          <div id="parent">
            <input class="child saveInput" id="element1"  type="checkbox" checked="checked" name="sameadr"></input><label id="element2" class="child save"> Save payment method</label>
            </div>

          <input class="btn button_slide slide_right" type="submit" value="Continue to checkout"></input>
          </div>
        </form>
        </div>



     </>
   );
 }
 export default Payment;