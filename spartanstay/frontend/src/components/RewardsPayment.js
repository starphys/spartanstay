function RewardPayment({token, setPayment, cost}) {

    handleClick = (e) => {
        e.preventDefault()
        setPayment({
            cardNum:"1234567891011121",
            expDate:"2222-12-22",
            securityCode:"123",
            address:"999 Residence Drive, Home Town, USA",
            paymentType:"Reward"
          })

    }

    if(token.rewardPoints >= cost) {
        return (
            <button onClick={handleClick}>Pay with {cost} Reward Points</button>
        )
    }
    else {
        return (            
            <button disabled>Insufficient Reward Points</button>
        )
    }
}

export default RewardPayment