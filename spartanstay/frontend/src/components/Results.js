import Listing from "./Listing"

function Results ({results}) {
    let i = 0

    return (<div>{results ? results.map(result => (<Listing listing={result} key={i++}/>))
    : ""} <br/></div> );
}

export default Results