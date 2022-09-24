//import logo from './logo.svg';
import logo from './images/logo-1.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt='logo'/>
        <p>
            <h1>Welcome to SpartanStay</h1>
            
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          About US
        </a>
      </header>
    </div>
  );
}

export default App;
