import Listing from "./Listing"

function Results ({results}) {
    let i = 0

    return (<div className="results">{results ? results.map(result => (<div><Listing listing={result} key={i++}/><br /></div>))
    : ""} </div>);
}

export default Results