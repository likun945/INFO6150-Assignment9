import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/aboutUs';
import Contact from './pages/contact';
import Jobs from './pages/jobs';
import Home from './pages/home';
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout> {/* Wrap the content with the Layout component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
