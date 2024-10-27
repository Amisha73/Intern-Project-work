// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import Home from './components/Home';
import Experience  from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <div className="">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
