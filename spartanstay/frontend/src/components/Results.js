import Listing from "./Listing"

function Results ({results, token, setBookings}) {
    let i = 0

    return (<div>{results ? results.map(result => (<Listing token={token} listing={result} setBookings={setBookings} key={i++}/>))
    : ""} <br/></div> );
}

export default Results