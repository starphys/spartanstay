import {useState} from "react"
import Results from "./Results"

function Search()
{
  const today = new Date().toISOString().slice(0, 10)

  const [results, setResults] = useState(null)
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
        <input type='text' placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}/>

        <input type='date' value={startDate} min={today} onChange={(e) => {setStartDate(e.target.value); if(e.target.value > endDate) {setEndDate(e.target.value)}}}/>
        <input type='date' value={endDate} min={startDate} onChange={(e) => {setEndDate(e.target.value)}}/>

        <select onChange={e => setOrder(e.target.value)}>
          <option value="PRICE">Price: Low to High</option>
          <option value="BEST_SELLER">Best</option>
        </select>
        <select onChange={e => setAdults(e.target.value)}>
          <option value={1}>Adults</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5+</option>
        </select>


        <button onClick = {handleClick}>Search</button>
        {results ? <Results results={results} /> : ""}
      </div>
    );
}

export default Search