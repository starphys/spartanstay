import "../style/Account.css";
import LogOut from "../components/LogOut";
import DeleteAccount from "../components/DeleteAccount"

function Account({token, setToken, setBookings, setSavedPayments}) {    
  return (
    <div className="Account">
      <div className="AccountForm">
        <label class = "account-page" ><b>Account Page</b></label>
        <LogOut setSavedPayments={setSavedPayments} setBookings={setBookings} setToken={setToken}/>
        <DeleteAccount setSavedPayments={setSavedPayments} token={token} setToken={setToken} setBookings={setBookings}/>
      </div>
    </div>
  );
}

export default Account;