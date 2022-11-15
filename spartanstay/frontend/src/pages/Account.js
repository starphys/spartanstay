import "../style/Account.css";
import LogOut from "../components/LogOut";

function Account({setToken, setBookings}) {    
  return (
    <div className="Account">
      <div className="AccountForm">
        <label><b>Account Page</b></label>
        <LogOut setBookings={setBookings} setToken={setToken}/>
      </div>
    </div>
  );
}

export default Account;