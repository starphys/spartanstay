import "../Account.css";
import LogOut from "../components/LogOut";

function Account({setToken}) {    
  return (
    <div className="Account">
      <div className="AccountForm">
        <label><b>Account Page</b></label>
        <LogOut setToken={setToken}/>
      </div>
    </div>
  );
}

export default Account;