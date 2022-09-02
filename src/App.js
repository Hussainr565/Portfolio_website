import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  return (
    <div >
      <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App