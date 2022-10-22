
import "../Account.css";



function Account() {
    
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        Account.history.push('/login')
        }
      
    
    

    
   /* let navigate= useNavigate();
    const routeChange=()=>{
        let path = ("/");
        navigate(path);
    }*/
    
        /*fetch ("http://localhost:8080/credentials/login",{
          method:"POST",
          credentials: "INCLUDE"
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(customer)
        }).then(()=>{
            console.log("Customer logged out")
         })
        if (result.data) {
          setUser(null)
        }
      }*/
    
  return (
  
    <div className="Account">
      
      <div className="AccountForm">
        <label><b>Account Page</b></label>
    
        <button 
            onClick={handleLogout} to='/login' >Logout
        </button>
            
        
        
      </div>
    </div>
  );
  }
export default Account;