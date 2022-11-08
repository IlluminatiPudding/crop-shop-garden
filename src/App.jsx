
import React from 'react'
import Home from "./pages/Home";

import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import CheckOut from "./pages/CheckOut";
import Rabi from "./pages/Rabi";
import Kharif from "./pages/Kharif";
import Zaid from "./pages/Zaid";
import About from "./pages/About";
import KBC from "./pages/KBC";
import SHome from "./pages/SHome"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegisterAdmin from './pages/RegisterAdmin';
import RegisterDealer from './pages/RegisterDealer';
import { useSelector } from 'react-redux';
import { authActions } from "./pages/store/store";

const App = () => {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/CheckOut" exact element={<CheckOut/>}/>
      <Route path="/Kharif" exact element={<Kharif/>}/>
      <Route path="/Rabi" exact element={<Rabi/>}/>
      <Route path="/Zaid" exact element={<Zaid/>}/>
      <Route path="/Register" exact element={<Register/>}/>
      <Route path="/Login" exact element={<Login/>}/>
      <Route path="/Product" exact element={<Product/>}/>
      <Route path="/ProductList" exact element={<ProductList/>}/>
      <Route path="/About" exact element={<About/>}/>
      <Route path="/KBC" exact element={<KBC/>}/>
      <Route path="/Admin" exact element={<RegisterAdmin/>}/>
      <Route path="/Dealer" exact element={<RegisterDealer/>}/>
      
        {/* <Route
          exact
          path="/SHome"
          element={isLoggedIn ? <SHome /> : <Navigate replace to={"/"} />}
        /> */}
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}


export default App

