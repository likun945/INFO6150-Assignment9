import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './pages/aboutUs'; // Import the About component

// Components for each route
const Home = () => <div>Home Page</div>;
const Jobs = () => <div>Jobs Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
