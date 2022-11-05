import StarRatings from "react-star-ratings"
import "../listing.css";

function Listing ({listing}) {
//{listing.ratePlan.price.current}
    return (
        <div class="x">
            <div class="row">
            <div class="column"><div class=""><img class="imageChange" src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /></div></div><br /> 
            <div id="col2" class="column"><h3 class="h3Class">{listing.name}</h3><br /> 
            <div class="star"><h1><StarRatings rating={listing.starRating} starRatedColor="black" numberOfStars={5} starDimension="19px" starSpacing="0"/></h1></div></div><br/>
           
            <div id="priceBlock" class="column"><h2 class="price">{listing.ratePlan ? listing.ratePlan.price.current : "Priceless"}</h2></div>
            </div>
        </div>
    )

}

export default Listing