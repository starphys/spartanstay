function RewardPayment({token, setPayment, cost}) {

    const handleClick = (e) => {
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
            <button class = "rewards-payment-btn" onClick={handleClick}><span>Pay with </span> <span>{cost}</span> <span>Reward Points per night</span></button>
        )
    }
    else {
        return (            
            <button class = "insufficient-btn" disabled>Insufficient Reward Points</button>
        )
    }
}

export default RewardPayment