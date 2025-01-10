import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import LoginRegister from './components/login-register/LoginRegister';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login-register" element={<LoginRegister />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
