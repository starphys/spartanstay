import {useState} from "react"

function Search()
{
  const [results, setResults] = useState(null)
  const [city, setCity] = useState("")

    const handleClick=(e)=>{
        e.preventDefault()
        const listing={destination:"San Jose", checkIn: "2022-12-20",checkOut: "2022-12-21",order: "PRICE", numAdults: 1}
        console.log(listing)
        fetch(`http://localhost:8080/listings/rooms?destination=${encodeURIComponent(city)}&checkIn=2022-12-20&checkOut=2022-12-21&order=PRICE&numAdults=1`).then((response)=>{
        return response.json()
      }).then(data => {setResults(data); return data}).then(data => console.log(data))
    }
    return (
      <div>
        <input type='text' value={city} placeholder="San Jose" onChange={(e) => {setCity(e.target.value)}}/>
        <button onClick = {handleClick}>Search</button>
        {results != null ? results.map(result => (<p>{result.name}  {result.ratePlan.price.current}</p>)) : ""}
      </div>
    );
}

export default Search