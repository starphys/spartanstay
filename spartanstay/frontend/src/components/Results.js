import Listing from "./Listing"

function Results ({results, token, setBookings, search}) {
    let i = 0

    return (<div>{results ? results.map(result => (<Listing token={token} listing={result} setBookings={setBookings} key={i++} search={search}/>))
    : ""} <br/></div> );
}

export default Results