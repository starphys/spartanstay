
function Listing ({listing}) {
//{listing.ratePlan.price.current}
    return (
        <div>
            {listing.name} {listing.ratePlan ? listing.ratePlan.price.current : "Priceless"}<br />
            <img src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" /><br /> 
            {listing.starRating}/5, {listing.address.streetAddress}, {listing.address.locality} {listing.address.region}, {listing.address.countryName} <br />  <br /> 
        </div>
    )

}

export default Listing