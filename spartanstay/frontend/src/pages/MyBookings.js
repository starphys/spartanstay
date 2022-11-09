
function MyBookings({token}) {
    fetch(`http://localhost:8080/reservation/mybookings?id=${token.id}`)
    .then((response)=>{
    return response.json()
  }).then(data => { return data}).then(data => console.log(data))
    
  return (
    <div className="">
        Hello {token.firstName}!
    </div>
    );
}

export default MyBookings;