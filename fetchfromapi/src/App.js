import logo from './logo.svg';
import './App.css';
import {Home} from "./Home";
import {CardList} from "./CardList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Details } from './Details';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        {/* <Router>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/Details" element={<Details />} />
          </Routes>
        </Router> */}
        <CardList />
        
      </header>
    </div>
  );
}

export default App;
