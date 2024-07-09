import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import './App.css'; // Global styles

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode}/>
      </div>
    </Router>
  );
}

export default App;