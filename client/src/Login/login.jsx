import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";





export default function Login() {
  const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    const handleSubmit = async(e) => {
        e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", form);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      console.log("Login successful:", res.data);
      toast.success("Login successful");
      if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/member-dashboard");
      }
            setForm({
                email: "",
                password: ""
            });
        
        console.log("Form submitted:", form);  
    } catch (error) {
       console.error("Login error:", error);
       toast.error("Login failed: " + (error.response?.data?.message || error.message)); 
    }
       
    }
  return (
    <>
      <h2>Login Component</h2>
        <form onSubmit={handleSubmit}> 
            <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            value={form.email}
            onChange={handleChange}
            required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" 
            id="password" 
            name="password" 
            value={form.password}
            onChange={handleChange}
            required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p>
        Don’t have an account?{" "}
        <Link to="/signup">
          <button type="button">Sign up</button>
        </Link>
      </p>
    </>
  );
}