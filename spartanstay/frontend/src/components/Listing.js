import StarRatings from "react-star-ratings"
import "../style/listing.css";
import {useState} from "react"
import Payment from "../pages/Payment";
import Reservation from "./reservation";
import RewardPayment from "./RewardsPayment";
import { useNavigate } from "react-router-dom";

function Listing ({search, listing, token, setBookings, savedPayments, setSavedPayments, setToken}) {
    const [clicked, setClicked] = useState(false)
    const [payment,setPayment] = useState(null)
    const [cardType, setCardType] = useState('')
    const [hotel,setHotel]= useState({
        cost: listing.ratePlan ? listing.ratePlan.price.exactCurrent : 999.99,
        image: listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140",
        id: listing.id,
        name: listing.name
        })
    const navigate=useNavigate();

 
    const handleClick = (e) => {
        e.preventDefault()
        setClicked(!clicked)
        setCardType("")
    }

    const handleSuccess = (e) => {
        e.preventDefault()
        setClicked(!clicked)
        setCardType("")
        setPayment(null)
        navigate('/mybookings')
    }
    const handleRedirect = (e) => {
        e.preventDefault()
        setClicked(!clicked)
        setCardType("")
        setPayment(null)
        navigate('/login')
    }

    if(clicked && !token) {
        return (        
        <div class="xL" >
        <div class="rowL">
            <div onClick={handleClick}>
                <div class="columnL"><div class=""><img class="imageChange" src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /></div></div><br /> 
                <div id="colL2" class="columnSN"><h3 class="h3Class">{listing.name}</h3><br /> 
                <div class="starDiv"><h1 class="star"><StarRatings rating={listing.starRating} starRatedColor="black" numberOfStars={5} starDimension="19px" starSpacing="0"/></h1></div></div><br/>
            
                <div id="priceBlock" class="columnL"><h2 class="price">{listing.ratePlan ? listing.ratePlan.price.current : "$999"}</h2></div>
            </div>
            <div>
                <button onClick={handleRedirect}>Please login to make a reservation.</button>
            </div>
            </div>
        </div>)
    }
    if(clicked && payment) {
        return (        
        <div class="xL" >
        <div class="rowL">
            <div onClick={handleClick}>
                <div class="columnL"><div class=""><img class="imageChange" src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /></div></div><br /> 
                <div id="colL2" class="columnSN"><h3 class="h3Class">{listing.name}</h3><br /> 
                <div class="starDiv"><h1 class="star"><StarRatings rating={listing.starRating} starRatedColor="black" numberOfStars={5} starDimension="19px" starSpacing="0"/></h1></div></div><br/>
            
                <div id="priceBlock" class="columnL"><h2 class="price">{listing.ratePlan ? listing.ratePlan.price.current : "$999"}</h2></div>
            </div>
            <div>
            <Reservation search={search} token={token} payment={payment} hotel={hotel} cost={Math.round(hotel.cost)*10} handleSuccess={handleSuccess} setBookings={setBookings} setToken={setToken}/></div>
            </div>
        </div>)
    }
    else if(clicked) {
        return (        
        <div class="xL" >
        <div class="rowL">
            <div onClick={handleClick}>
                <div class="columnL"><div class=""><img class="imageChange" src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /></div></div><br /> 
                <div id="colL2" class="columnSN"><h3 class="h3Class">{listing.name}</h3><br /> 
                <div class="starDiv"><h1 class="star"><StarRatings rating={listing.starRating} starRatedColor="black" numberOfStars={5} starDimension="19px" starSpacing="0"/></h1></div></div><br/>
            
                <div id="priceBlock" class="columnL"><h2 class="price">{listing.ratePlan ? listing.ratePlan.price.current : "$999"}</h2></div>
            </div>
            {cardType === "" ? 
                <div><button onClick={(e)=>{e.preventDefault(); setCardType("new")}}>Pay With New Card</button>
                {savedPayments.length > 0 ? <button onClick={(e)=>{e.preventDefault(); setCardType("saved")}}>Pay with Saved Card</button> : ""}
                <RewardPayment token={token} setPayment={setPayment} cost={Math.round(hotel.cost)*10} />
            </div> : ""}
            <div>
            {cardType === "new" ? <Payment token={token} setPayment={setPayment} savedPayments={savedPayments} setSavedPayments={setSavedPayments}/> : ""}
            {cardType === "saved" ? 
                                        <select onfocus={(e) => {this.selectedIndex = -1}} onChange={e => setPayment(e.target.value)}>
                                            <option value="" selected disabled hidden>Saved Cards</option>
                                        {savedPayments.map(savedPayment => {return <option value={savedPayment}>{savedPayment.cardNumber}</option>})}
                                        </select>
        : ""}
            </div>
            </div>
        </div>)
    }

    else {
        return (
            <div class="xL" >
                <div class="rowL">
                    <div onClick={handleClick}>
                        <div class="columnL"><div class=""><img class="imageChange" src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /></div></div><br /> 
                        <div id="colL2" class="columnSN"><h3 class="h3Class">{listing.name}</h3><br /> 
                        <div class="starDiv"><h1 class="star"><StarRatings rating={listing.starRating} starRatedColor="black" numberOfStars={5} starDimension="19px" starSpacing="0"/></h1></div></div><br/>
                    
                        <div id="priceBlock" class="columnL"><h2 class="price">{listing.ratePlan ? listing.ratePlan.price.current : "$999"}</h2></div>
                    </div>
            </div>
            </div>
        )
      }

}

export default Listing