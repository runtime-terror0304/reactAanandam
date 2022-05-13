import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import Service from "./component/servicesPage/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/> 
        <Route path="/services" element={<Service/>} />
      </Routes>
    </>
  );
}

export default App;
