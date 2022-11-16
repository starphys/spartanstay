import Listing from "./Listing"

function Results ({results, token, setBookings, search, savedPayments}) {
    let i = 0

    return (<div>{results ? results.map(result => (<Listing token={token} listing={result} setBookings={setBookings} key={i++} search={search} savedPayments={savedPayments}/>))
    : ""} <br/></div> );
}

export default Results