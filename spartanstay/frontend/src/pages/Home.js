import logo from '../images/logo-1.png';
import "../styles.css";

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt='logo'/>
        <p>
            <h1>Welcome to SpartanStay</h1>
        </p>
        <Search/>
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
export default Home;