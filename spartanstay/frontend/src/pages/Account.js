import "../Account.css";
import LogOut from "../components/LogOut";
import DeleteAccount from "../components/DeleteAccount"

function Account({token, setToken, setBookings}) {    
  return (
    <div className="Account">
      <div className="AccountForm">
        <label><b>Account Page</b></label>
        <LogOut setBookings={setBookings} setToken={setToken}/>
        <DeleteAccount token={token} setToken={setToken} setBookings={setBookings}/>
      </div>
    </div>
  );
}

export default Account;