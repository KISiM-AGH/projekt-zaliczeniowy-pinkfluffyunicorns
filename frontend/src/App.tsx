import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navigation} from "./Pages/Navigation";
import {Login} from "./Pages/Login/login";
import {MainPage} from "./Pages/MainPage/mainPage";
import {Register} from "./Pages/Register/register";
import {Logout} from "./Pages/Logout/logout";
import {Cart} from "./Pages/Cart/cart";
import {AdminPanel} from "./Pages/AdminPanel/adminPanel";
import {AddProduct} from "./Pages/AdminPanel/addProduct";
import {EditProduct} from "./Pages/AdminPanel/editProduct";
import {AuthRequired, OnlyAdminAccess} from "./Pages/AuthRequired";

function App() {
  return (
      <div>
        <Navigation/>

        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/cart" element={<AuthRequired><Cart/></AuthRequired>}/>
            <Route path="/adminPanel" element={<OnlyAdminAccess><AdminPanel/></OnlyAdminAccess>}/>
            <Route path="/product/add/:id" element={<OnlyAdminAccess><AddProduct/></OnlyAdminAccess>}/>
            <Route path="/product/edit/:id" element={<OnlyAdminAccess><EditProduct/></OnlyAdminAccess>}/>
            <Route element={<MainPage/>}/>
        </Routes>
      </div>

  );
}

export default App;
