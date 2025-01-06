import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import PizzaDetails from './pages/PizzaDetalis';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* Use element and replace component with element */}
        <Route path="/menu/:id" element={<PizzaDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
