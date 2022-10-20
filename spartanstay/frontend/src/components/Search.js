import {useState} from "react"
import Listing from "./Listing"

function Search()
{
  const today = new Date().toISOString().slice(0, 10)
  let i = 0

  const [results, setResults] = useState(null)
  const [city, setCity] = useState("San Jose")
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)

    const handleClick=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/listings/rooms?destination=${encodeURIComponent(city.trim())}`+
        `&checkIn=${startDate}`+
        `&checkOut=${endDate}`+
        `&order=PRICE`+
        `&numAdults=1`)
        .then((response)=>{
        return response.json()
      }).then(data => {setResults(data); return data}).then(data => console.log(data))
    }
    
    return (
      <div>
        <input type='text' placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}/>

        <input type='date' value={startDate} min={today} onChange={(e) => {setStartDate(e.target.value); if(e.target.value > endDate) {setEndDate(e.target.value)}}}/>
        <input type='date' value={endDate} min={startDate} onChange={(e) => {setEndDate(e.target.value)}}/>

        <button onClick = {handleClick}>Search</button>
        {results != null ? results.map(result => (<Listing listing={result} key={i++}/>))
        : ""}
      </div>
    );
}

export default Search