import StarRatings from "react-star-ratings"

function Listing ({listing}) {
//{listing.ratePlan.price.current}
    return (
        <div>
            <img src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /><br /> 
            {listing.name}<br /> 
            {listing.ratePlan ? listing.ratePlan.price.current : "Priceless"}<StarRatings rating={listing.starRating} starRatedColor="red" numberOfStars={5} starDimension="19px" starSpacing="0"/><br />  <br /> 
        </div>
    )

}

export default Listing