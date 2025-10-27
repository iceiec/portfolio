import logo from './logo.svg';
import Home from './Components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
    <div className = "App">
      <Routes>
        <Route path="/" element={<Home />} />   
      </Routes>
    </div>
    </Router>
  );
}

export default App;
