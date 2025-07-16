import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { About } from './pages/About';
import { Collection } from './pages/Collection';
import { Cart } from './pages/Cart';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { Home } from './pages/Home';
import { Placeorder } from './pages/Placeorder';
import { Order } from './pages/Orders';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Searchbar } from './components/Searchbar';
export const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Searchbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/place-order' element={<Placeorder />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
