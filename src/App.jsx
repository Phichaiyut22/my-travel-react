//rcfe key for reactcomponent
import React from "react";
import Dti from "./Dti.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import MyTravel from "./views/MyTravel.jsx";
import AddMytravel from "./views/AddMytravel.jsx";
import UpdateMytravel from "./views/UpdateMytravel.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mytravel" element={<MyTravel />} />
        <Route path="/addmytravel" element={<AddMytravel />} />
        <Route path="/updatemytravel/:travelId" element={<UpdateMytravel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
