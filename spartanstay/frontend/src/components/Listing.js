import StarRatings from "react-star-ratings"
import "../styles.css"

function Listing ({listing}) {
//{listing.ratePlan.price.current}
    return (
        <div className="search-container listing">
            <table>
                <tr>
                    <td td className="listing-column">
                        <img src={listing.optimizedThumbUrls ? listing.optimizedThumbUrls.srpDesktop : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250&h=140"} alt="img" />
                    </td>
                    <td className="listing-column">
                        <h3>{listing.name}</h3><StarRatings rating={listing.starRating} starRatedColor="red" numberOfStars={5} starDimension="19px" starSpacing="0"/>
                    </td>
                    <td td className="listing-column">
                        <h3>{listing.ratePlan ? listing.ratePlan.price.current : "Priceless"} </h3>
                    </td>
                </tr>
            </table>
        </div>
    )

}

export default Listing