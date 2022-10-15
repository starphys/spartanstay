function Search()
{
    const handleClick=(e)=>{
        e.preventDefault()
        const listings={destination:"San Jose", checkIn: "2022-12-20",checkOut: "2022-12-21",order: "PRICE", numAdults: 1}
        console.log(listings)
        fetch("http://localhost:8080/listings/rooms",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(listings)
      
      }).then((response)=>{
        console.log(response)
      })
    }
    return <button onClick = {handleClick}>Search</button>;
}

export default Search