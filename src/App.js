import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          STAGING
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr/>
        {/* eslint-disable-next-line no-undef */}
        <button onClick={methodDoesNotExist}>Break the world</button>;
      </header>
    </div>
  );
}

export default App;
