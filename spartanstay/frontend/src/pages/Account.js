import "../Account.css";
import LogOut from "../components/LogOut";

function Account() {    
  return (
    <div className="Account">
      <div className="AccountForm">
        <label><b>Account Page</b></label>
        <LogOut />
      </div>
    </div>
  );
}

export default Account;