import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navigation} from "./Pages/Navigation";
import {Login} from "./Pages/Login/login";
import {MainPage} from "./Pages/MainPage/mainPage";

function App() {
  return (
      <div>
        <Navigation/>

        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<Login/>}/>
          {/*<Route path="/books/add" element={<AuthRequired><BookForm/></AuthRequired>}/>*/}
          {/*<Route path="/books/edit/:id" element={<AuthRequired><BookForm/></AuthRequired>}/>*/}
          {/*<Route path="/books/:id" element={<BookPreview/>}/>*/}
        </Routes>
      </div>

  );
}

export default App;