import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import ProductDetails from './Components/ProductDetails/ProductDetails'; 
import ContactUs from './Components/ContactUs/Contactus'; 
import AboutUs from './Components/Aboutus/Aboutus'; 
import UserDetails from './Components/UserDetails/UserDetails'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:productId" element={<ProductDetails />} /> 
         <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/user-details" element={<UserDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
