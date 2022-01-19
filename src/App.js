import logo from './logo.svg';
import './App.css';
import Home from './home';
import Topbar from './Topbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Product from './Product';
import Contact from './Contact';
import Service from './Service';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';


function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <div className='row'>
<Topbar></Topbar>

        </div>
        <div className='row'>
         
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/service" element={<Service></Service>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
          
         
        </div>


      </div>
      </BrowserRouter>
  );
}

export default App;
