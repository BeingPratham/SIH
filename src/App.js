import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import NavScrollExample from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Students from './components/Students';
function App() {
  return (
    // <Router>
    <div className="App">
    <NavScrollExample></NavScrollExample>
      <Routes>
      
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/student/:id" element={<Students/>} />
      </Routes>
      
    </div>
    // </Router>
  );
}

export default App;
