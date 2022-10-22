import React,{useState} from 'react'
function DeleteAccount({userToken}) {

    const handleClick = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/credentials/delete/" + userToken.id, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }
        ).then((response) => {
            response.json()
        }).then((data) => console.log(data))
    }
    return <button onClick={handleClick}> Delete Account</button>
}
export default DeleteAccount 