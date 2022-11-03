import {useState} from "react"
import Results from "./Results"
import "../SignUp.css"

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
      <div>
        <div className="search-container search-bar">
          <table className="listing">
            <tr><th>Destination</th><th>Check-In Date</th><th>Check-Out Date</th><th>Sort Order</th><th>Number of Guests</th></tr> 
            <tr><td>
          <input type='text' placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}/>
          </td><td>
          <input className="search-date" type='date' value={startDate} min={today} onChange={(e) => {setStartDate(e.target.value); if(e.target.value > endDate) {setEndDate(e.target.value)}}}/>
          </td><td>
          <input className="search-date" type='date' value={endDate} min={startDate} onChange={(e) => {setEndDate(e.target.value)}}/>
          </td><td>
          <select onChange={e => setOrder(e.target.value)}>
            <option value="PRICE">Price: Low to High</option>
            <option value="PRICE_HIGHEST_FIRST">Price: High to Low</option>
            <option value="BEST_SELLER">Best</option>
          </select>
          </td><td>
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
          </select>
          </td></tr></table>
          <button className="center" onClick = {handleClick}>Search</button>
        </div>
        {results ? <Results results={results} /> : ""}
      </div>
    );
}

export default Search