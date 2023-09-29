import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

