import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import Signup from './pages/signup/Signup';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;