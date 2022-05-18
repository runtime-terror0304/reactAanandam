import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import Service from "./component/servicesPage/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="reactAanandam/#/login" element={<Login/>}/>
        <Route path="reactAanandam/#/" element={<Home/>}/> 
        <Route path="reactAanandam/#/services" element={<Service/>} />
      </Routes>
    </>
  );
}

export default App;
