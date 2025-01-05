// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';  // Updated path to Nav component
import Home from './pages/Home';     // Updated path to Home page
import Menu from './pages/Menu';     // Updated path to Menu page
import Contact from './pages/Contact'; // Updated path to Contact pag

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;