import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Signin from './components/signin'; 
import Search from './components/Search';
import MakeAppointment from './pages/MakeAppointment';
import BuyProperty from './pages/BuyProperty';
import RentProperty from './pages/RentProperty';
import PropertyListing from './pages/PropertyListing';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/search" element={<Search />} />
          <Route path="/appointment" element={<MakeAppointment />} />
          <Route path="/buy" element={<BuyProperty />} />
          <Route path="/rent" element={<RentProperty />} />
          <Route path="/properties" element={<PropertyListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
