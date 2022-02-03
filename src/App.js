import './App.css';
import {Link} from "react-router-dom";
import Nav from './components/Nav'

function App() {
  return (
    
    <div className="App">

      <header className="App-header">
        <p>
          OSRS Guides
          <img src="http://thegg.net/wp-content/uploads/2021/02/these-are-some-top-old-school-runescape-bosses-to-fight-in-2021-header.jpg" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
