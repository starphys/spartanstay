import {useState} from "react"
import Results from "./Results"
import "../style/search.css";
import React from 'react';
import {FaSearch} from "react-icons/fa";
import StarRatings from "react-star-ratings";


function Search({results, setResults})
{
  const today = new Date().toISOString().slice(0, 10)

  const [city, setCity] = useState("San Jose")
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [order, setOrder] = useState("PRICE")
  const [adults, setAdults] = useState(1)
  const [waiting, setWaiting] = useState(false)
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [pool, setPool] = useState(false)
  const [spa, setSpa] = useState(false)
  const [gym, setGym] = useState(false)
  const [petfriendly, setPetFriendly] = useState(false)
  const [freewifi, setFreeWifi] = useState(false)
  const [starRating, setStarRating] = useState(0)

  const updatePool = (e) => {
    // e.preventDefault()
    setPool(!pool)
  }
  const updateSpa = (e) => {
    e.preventDefault()
    setSpa(!spa)
  }
  const updateGym = (e) => {
    //e.preventDefault()
    setGym(!gym)
  }
  const updatePetFriendly = (e) => {
    setPetFriendly(!petfriendly)
  }
  const updateFreeWifi = (e) => {
    setFreeWifi(!freewifi)
  }
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(minPrice, maxPrice)
        setWaiting(true)
        fetch(`http://localhost:8080/listings/rooms?destination=${encodeURIComponent(city.trim())}`+
        `&checkIn=${startDate}`+
        `&checkOut=${endDate}`+
        `&order=${order}`+
        `&numAdults=${adults}` + 
        (minPrice > 0 || maxPrice < 5000 ? `&priceMin=${minPrice}&priceMax=${maxPrice}`: "") +
        "&amenities=" + (pool ? "Pool" : "") +
        "&amenities=" + (spa ? "Spa" : "") +
        "&starRatings=" + updateRatingList(starRating))
        .then((response)=>{
        return response.json()
      }).then(data => {setResults(data); return data}).then(data => {console.log(data); setWaiting(false)})
    }

    const updateRatingList = (rating) => {
      let ratingList = ""
      //use fallthrough here for easier processing
        switch(rating) {
          case 1:
            ratingList += "1,"
          case 2:
            ratingList += "2,"
          case 3:
            ratingList += "3,"
          case 4:
            ratingList += "4,"
          case 5:
            ratingList += "5,"
          default:
            break;
        }
      return ratingList.slice(0,-1)
    }
    
    return (
      <div className={waiting ? "waiting" : ""}>
             
      <div className="">
        <div className="">
        </div>
       
      </div>
      <br></br>
      <br></br>
      <div id="startSearch" class="rowS">
  <div class="columnS">
  <label class="dateLabel" id="firstDateLabel">Check-in</label>
        <input class="search-input d" type='date' value={startDate} min={today} onChange={(e) => {setStartDate(e.target.value); if(e.target.value > endDate) {setEndDate(e.target.value)}}}/>
        
        </div>  
  <div class="columnS">
  <label class="dateLabel">Check-out</label>
  <input class ="search-input d" type='date' value={endDate} min={startDate} onChange={(e) => {setEndDate(e.target.value)}}/></div>
  
  <div class="columnS"> 
  <label id="guestLabel">Number of Guests</label>
        <select class="e" onChange={e => setAdults(e.target.value)}>
          <option value={1}>Adults</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5+</option>
        </select>
        <select id="e2" class="e">
          <option value={1}>Children</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5+</option>
        </select>
        </div>
  <div className="columnS">
  <label className="search-label dest">Destination</label>
 
    <form className="search-form" onSubmit={handleClick}>
      
      <br></br>
      <br></br>
  <input className="input-abc" type="search" required placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}></input>

  <FaSearch color= "white" class ="fk" onClick = {handleClick}></FaSearch>
  
</form>
</div>

</div>

<div class = "rowS">
  <div id="filterDiv1" class = "filter">
    <label class="filterText">Filter by Price</label>
    <input placeholder="min" class = "min-val" onChange={(e) => {if(isNaN(parseInt(e.target.value))) {setMinPrice(0)} else {setMinPrice(e.target.value)}}}></input>
    <span class = "to">to</span>
    <input placeholder="max" class = "max-val" onChange={(e) => {if(isNaN(parseInt(e.target.value))) {setMaxPrice(5000)} else {setMaxPrice(e.target.value)}}}></input>
  </div>
  <div id="filterDiv1" class = "filter2">
    <label class="filterText">Filter by Amenities</label>
    
    <input type="checkbox" id = "line1" onChange={updatePetFriendly}/><label>Pet Friendly</label>
    <input type="checkbox" onChange={updateFreeWifi}/><label>Free-Wifi</label>
    <input type="checkbox" id = "line2" onChange={updatePool}/><label>Pool</label>
    <input type="checkbox" id = "line2" onChange={updateSpa}/><label>Spa</label>
    <input type="checkbox" id = "line2" onChange={updateGym}/><label>Gym</label>

    
  </div>
  <div id="filterDiv3" class = "filter3">
  <label class="filterText3">Customer Ratings</label>
    <StarRatings rating={starRating} changeRating={setStarRating} starDimension = "30px" starSpacing="0px" starHoverColor="Gold" starRatedColor="Gold" ></StarRatings>
    <label class = "num-of-stars">{starRating}</label>
  </div>

  <div id = "sortDiv" class = "columnS">
  <label className="sortOrder">Sort by</label>
        <select class="e3" onChange={e => setOrder(e.target.value)}>
          <option value="PRICE">Price: Low to High</option>
          <option value="PRICE_HIGHEST_FIRST">Price: High to Low</option>
          <option value="BEST_SELLER">Best</option>
        </select>
        </div>
</div>

<div class="initialDiv"><div class="fillS"><div class="innerText"><h1 class="neonText">New name, same great savings</h1>
<h3 class="innerSmallText">Secret Prices are now Member Prices. Sign in or join to save an average of 15% on thousands of hotels.​</h3></div> </div></div>
      
      <br></br>
      <br></br>
      {results ? <Results results={results} /> : ""}
      </div>
    );
}

export default Search