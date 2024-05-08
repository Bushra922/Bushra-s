import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Signin from './components/signin'; 
import Search from './components/Search';
import Buy from './components/Buy';
import Rent from './components/Rent';
import Property from './components/Property';
import Users from './components/Users';
import MakeAppointment from './pages/MakeAppointment';
import RentProperty from './pages/RentProperty';
import PropertyListing from './pages/PropertyListing';
import BuyProperty from './pages/BuyProperty';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/appointment" element={<MakeAppointment />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buyproperty" element={<BuyProperty />} />
        <Route path="/rent" element={<RentProperty />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </div>
  );
}

export default App;
