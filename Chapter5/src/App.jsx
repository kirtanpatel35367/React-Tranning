import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//For Task1
import Home from './Task1/Components/Home'
import Aboutus from './Task1/Components/Aboutus'
import ContactUs from './Task1/Components/ContactUs'
import Navbar from './Task1/Components/Navbar'
import Userprofile from './Task1/Components/Userprofile'
import Errorpage from './Task1/Components/Errorpage';
import Store from './Task1/Components/Store';
import ProductList from './Task1/Components/ProductList';
import ProductInfo from './Task1/Components/ProductInfo';
import UserLogin from './Task1/Components/userLogin';
import UserRegister from './Task1/Components/UserRegister';



const App = () => {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='userprofile' element={<Userprofile />} />
          <Route path='userprofile/:name' element={<Userprofile />} />
          <Route path='userRegister' element={<UserRegister />} />
          <Route path='store' element={<Store />} />
          <Route path='store/product' element={<ProductList />}></Route>
          <Route path='userlogin' element={<UserLogin/>}></Route>
          <Route path='store/productinfo' element={<ProductInfo />}></Route>
          <Route path='/*' element={<Errorpage />} />
          <Route />
        </Routes>
      </Router>
    </>
  )
}

export default App
