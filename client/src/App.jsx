import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard/adminDashboard.jsx";
import MemberDashboard from "./MemberDashboard/memberDashboard.jsx";
import './App.css'
import AddUser from './user/user.jsx'

import AddBook from './Books/books.jsx'
import Login from './Login/login.jsx'

function App() {
 
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<AddUser />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/member-dashboard" element={<MemberDashboard />} />
      </Routes>
    </Router>
   
   
    </>
  )
}

export default App
