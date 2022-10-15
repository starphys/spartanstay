import {useState} from "react"

function Search()
{
  const [results, setResults] = useState(null)

    const handleClick=(e)=>{
        e.preventDefault()
        const listing={destination:"San Jose", checkIn: "2022-12-20",checkOut: "2022-12-21",order: "PRICE", numAdults: 1}
        console.log(listing)
        fetch("http://localhost:8080/listings/rooms?destination=san%20jose&checkIn=2022-12-20&checkOut=2022-12-21&order=PRICE&numAdults=1").then((response)=>{
        return response.json()
      }).then(data => {setResults(data); return data}).then(data => console.log(data))
    }
    if(results != null) {
      return (
        <div>
          <button onClick = {handleClick}>Search</button>
          {results.map(result => (<p>{result.name}</p>))}
        </div>
      );
    }
    else {
      return <button onClick = {handleClick}>Search</button>
    }
}

export default Search