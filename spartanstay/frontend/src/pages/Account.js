import "../style/Account.css";
import LogOut from "../components/LogOut";
import DeleteAccount from "../components/DeleteAccount"

function Account({token, setToken, setBookings, setSavedPayments}) {    
  return (
    <>
    <div class="fillA"><h1 class = "fillA-header">Account Details</h1></div>
    <div className="Account">
      <div className="a-container">
        <div id="a-wrap">
          <header class="a-header">
          <label class="a-label a-title">User Credentials</label>
        <div class="a-row">
        <div class="a-column">
        <label class="a-label aDetailsLabel"> First Name</label>
        <div class="a-box"><label class="a-label aDetailsLabel aDetailsLabel2">{token.firstName}</label></div>
        </div>
        <div class="a-column a-column2">
        <label class="a-label aDetailsLabel"> Last Name</label>
        <div class="a-box"><label class="a-label aDetailsLabel aDetailsLabel2">{token.lastName}</label></div>
        </div>
        </div>
        <div class="a-row">
        <div class="a-column a-single-col">
        <label class="a-label aDetailsLabel a-email"> Email</label>
        <div class="a-box a-box-email"><label class="a-label aDetailsLabel unchangedEmail">{token.email}</label></div>
        </div></div>
        <div class="a-row">
        <div class="a-column a-single-col-rew">
        <label class="a-label aDetailsLabel a-email">Reward Points Earned</label>
        <div class="a-box a-box-email"><label class="a-label aDetailsLabel unchangedReward">{token.rewardPoints}</label></div>
        </div>
        </div>
        <div class="a-row button-row">
        <div class="a-column buttonCol">
        <DeleteAccount setSavedPayments={setSavedPayments} token={token} setToken={setToken} setBookings={setBookings}/>
        </div>
        <div class="a-column a-column2 buttonCol">
        <LogOut setSavedPayments={setSavedPayments} setBookings={setBookings} setToken={setToken}/>
        </div>
        </div>
        </header>
        </div>
      </div>
    </div>
    </>
  );
}

export default Account;