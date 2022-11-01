import "../Account.css";
import LogOut from "../components/LogOut";
import DeleteAccount from "../components/DeleteAccount"

function Account({token, setToken}) {    
  return (
    <div className="Account">
      <div className="AccountForm">
        <label><b>Account Page</b></label>
        <LogOut setToken={setToken}/>
        <DeleteAccount token={token} setToken={setToken}/>
      </div>
    </div>
  );
}

export default Account;