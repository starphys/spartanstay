import {useState} from "react"
import Results from "./Results"
import "../style/search.css";
import React from 'react';
import {FaSearch} from "react-icons/fa";


function Search({results, setResults})
{



  const today = new Date().toISOString().slice(0, 10)

  const [city, setCity] = useState("San Jose")
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [order, setOrder] = useState("PRICE")
  const [adults, setAdults] = useState(1)

    const handleClick=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/listings/rooms?destination=${encodeURIComponent(city.trim())}`+
        `&checkIn=${startDate}`+
        `&checkOut=${endDate}`+
        `&order=${order}`+
        `&numAdults=${adults}`)
        .then((response)=>{
        return response.json()
      }).then(data => {setResults(data); return data}).then(data => console.log(data))
    }
    
    return (
      <>
             
      <div className="">
        <div className="">
          {/* <label>Destination</label>
        <input type='text' placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}/>

        <label>Dates</label>
        <input type='date' value={startDate} min={today} onChange={(e) => {setStartDate(e.target.value); if(e.target.value > endDate) {setEndDate(e.target.value)}}}/>
        <input type='date' value={endDate} min={startDate} onChange={(e) => {setEndDate(e.target.value)}}/>

        <label>Sort Order</label>
        <select onChange={e => setOrder(e.target.value)}>
          <option value="PRICE">Price: Low to High</option>
          <option value="PRICE_HIGHEST_FIRST">Price: High to Low</option>
          <option value="BEST_SELLER">Best</option>
        </select>
        <label>Number of Guests</label>
        <select onChange={e => setAdults(e.target.value)}>
          <option value={1}>Adults</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5+</option>
        </select>
        <select>
          <option value={1}>Children</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5+</option>
        </select> */}

        
        {/* <button onClick = {handleClick}>Search  </button> */}

        </div>
       
      </div>
      <br></br>
      <br></br>
      {/* <input type='text' placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}/> */}
      <div id="startSearch" class="row">
  <div class="columnS">
  <label class="dateLabel">Check-in</label>
        <input class="d" type='date' value={startDate} min={today} onChange={(e) => {setStartDate(e.target.value); if(e.target.value > endDate) {setEndDate(e.target.value)}}}/>
        
        </div>  
  <div class="columnS">
  <label class="dateLabel">Check-out</label>
  <input class ="d" type='date' value={endDate} min={startDate} onChange={(e) => {setEndDate(e.target.value)}}/></div>
  
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
  <div class="columnS">
  <label class="dest">Destination</label>
 
    <form onSubmit={handleClick}>
      
      <br></br>
      <br></br>
  <input class="abc" type="search" required placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}></input>

  <FaSearch color= "white" class ="fk" onClick = {handleClick}></FaSearch>
  
</form>
</div>

</div>

<div class = "row">
<div id="sortDiv" class = "columnS">
<label class="sortOrder">Sort by</label>
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
      </>
    );
}

export default Search