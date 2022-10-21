
function Listing ({listing}) {
//{listing.ratePlan.price.current}
    return (
        <div>
            {listing.name} {listing.ratePlan ? listing.ratePlan.price.current : "Priceless"}<br />
            <img src={listing.optimizedThumbUrls.srpDesktop} alt="img" /><br /> 
            {listing.starRating}/5, {listing.address.streetAddress}, {listing.address.locality} {listing.address.region}, {listing.address.countryName} <br />  <br /> 
        </div>
    )

}

export default Listing