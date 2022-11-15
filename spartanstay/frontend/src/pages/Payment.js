
 import "../style/payment.css";
 import React, { useState } from 'react';
 import PaymentIcon from 'react-payment-icons';
 import { FaUser } from 'react-icons/fa';
 import { MdEmail } from 'react-icons/md';
 import { FaAddressCard } from 'react-icons/fa';
 import { FaCity } from 'react-icons/fa';
 import Alert from 'react-bootstrap/Alert'

 function Payment({token, setPayment}) {

  const [cardNum, setCardNum] = useState('')
  const [expMonth, setExpMonth] = useState(0)
  const [expYear, setExpYear] = useState(0)
  const [securityCode, setSecurityCode] = useState('')
  const [fName, setFName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [savePayment, setSavePayment] = useState('')
  const [invalidCard, setInvalidCard] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if(isNaN(parseInt(cardNum)) || isNaN(parseInt(securityCode))) {
      setInvalidCard(true)
    }
    else {
      setInvalidCard(false)
      const payment = {
        userId:token.id,
        paymentType:"Credit",
        cardNumber:cardNum,
        expMonth:expMonth,
        expYear:expYear,
        securityCode:securityCode,
        nameOnCard:fName,
        billingName:fName,
        billingAddress:address,
        billingCity:city,
        billingState:state,
        billingZip:zip
      }
    
      setPayment({
        cardNum:cardNum,
        expDate:expMonth + expYear,
        securityCode:securityCode,
        address:address
      })

      if(savePayment) {
        fetch("http://localhost:8080/payments/addCardDetails", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payment)
          }
          ).then((response) => {
              return response.json()
          }).then((data) => {console.log(data) })
      }
    }
  }

   return (
     <>
         <div class="fill" ><h1 class="neonText" >Payment Info</h1></div>

        <br></br>
        <div id="wrap">
             <header>
               <div class="billingAddress">
                 <br></br>
                 <h3>Billing Address</h3>


               <label className="default" for="fname"><pre><FaUser size={15}/>  Full Name </pre></label>
              <input type="text" id="fname" name="firstname" placeholder="John M. Doe" onChange={(e)=>setFName(e.target.value)}></input>
              <label for="email"><pre><MdEmail size={20}/>  Email </pre></label>
             <input type="text" id="email" name="email" placeholder="john@example.com"></input>
             <label for="adr"><pre><FaAddressCard size={20}/>  Address </pre></label>
             <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" onChange={(e) => setAddress(e.target.value)}></input>
             <label for="city"><pre><FaCity size={20}/>  City</pre></label>
             <input type="text" id="city" name="city" placeholder="New York" onChange={(e)=>setCity(e.target.value)}></input>
             <div class="row">
               <div class="col-50">
                 <label for="state">State</label>
                 <input type="text" id="state" name="state" placeholder="NY" onChange={(e)=>setState(e.target.value)}></input>
               </div>
               <div class="col-50">
                 <label for="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001" onChange={(e)=>setZip(e.target.value)}></input>
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
                 </div>
              <label for="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
              <label for="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={(e)=>setCardNum(e.target.value)}></input>
              <div class= "row">

                <div class="expcvv">
                  <label for="expmonth">Exp Month</label>
                  <select defaultValue={expMonth} className="input-text" id="expmonth" name="expmonth" placeholder="September" onChange={e => setExpMonth(e.target.value)}>
                    <option value={0} disabled="disabled" selected="selected" hidden>Month</option>
                    <option value={1}>January</option>
                    <option value={2}>February</option>
                    <option value={3}>March</option>
                    <option value={4}>April</option>
                    <option value={5}>May</option>
                    <option value={6}>June</option>
                    <option value={7}>July</option>
                    <option value={8}>August</option>
                    <option value={9}>September</option>
                    <option value={10}>October</option>
                    <option value={11}>November</option>
                    <option value={12}>December</option>
                  </select>
                </div>
                <div class="expcvv">
                  <label for="expyear">Exp Year</label>
                  <select defaultValue={expYear} className="input-text" id="expmonth" name="expmonth" placeholder="2023" onChange={e => setExpYear(e.target.value)}>
                    <option value={0} disabled="disabled" selected="selected" hidden>Year</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                    <option value={2026}>2026</option>
                    <option value={2027}>2027</option>
                    <option value={2028}>2028</option>

                  </select>
                </div>
                <div class="expcvv">
                  <label for="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" onChange={(e) => setSecurityCode(e.target.value)}></input>
                </div>
              </div>
            </div>

          <div id="parent">
            <input class="child saveInput" id="element1"  type="checkbox" name="sameadr" onChange={(e) =>setSavePayment(e.target.value)}></input><label id="element2" class="child save"> Save payment method</label>
            </div>

          {invalidCard ? <Alert key='danger' className="error-msg" variant='danger'>Card number and security code must be integer values.</Alert>:"" }
          <input class="btn button_slide slide_right" type="button" value="Continue to checkout" onClick={handleClick}></input>
          </div>
        </div>
     </>
   );
 }
 export default Payment;