import StarRatings from "react-star-ratings"
import "../style/listing.css";
import {useState} from "react"
import Payment from "../pages/Payment";
import Reservation from "./reservation";

function Listing ({listing, token, setBookings}) {
//{listing.ratePlan.price.current}
    const [clicked, setClicked] = useState(false)
    const [payment,setPayment] = useState('')
    const [success, setSuccess] = useState(false)


    const handleClick = (e) => {
        e.preventDefault()
        setClicked(!clicked)
    }


    const hotel = {
        cost: listing.ratePlan ? listing.ratePlan.price.exactCurrent : 999.99,
        image: listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140",
        id: listing.id,
        name: listing.name
      }

    return (
        <div class="xL" >
            <div class="rowL">
                <div onClick={handleClick}>
                    <div class="columnL"><div class=""><img class="imageChange" src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /></div></div><br /> 
                    <div id="colL2" class="columnSN"><h3 class="h3Class">{listing.name}</h3><br /> 
                    <div class="starDiv"><h1 class="star"><StarRatings rating={listing.starRating} starRatedColor="black" numberOfStars={5} starDimension="19px" starSpacing="0"/></h1></div></div><br/>
                
                    <div id="priceBlock" class="columnL"><h2 class="price">{listing.ratePlan ? listing.ratePlan.price.current : "$999"}</h2></div>
                </div>
            {clicked ? <div><Payment token={token} setPayment={setPayment}/><Reservation payment={payment} hotel={hotel} setSuccess={setSuccess} setBookings={setBookings}/></div> : ""}
            </div>
        </div>
    )

}

export default Listing