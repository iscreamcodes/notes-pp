import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AddUser(){
    const [user,setUser] = useState({
        name: "",
        email: "",
        password: "",   // you'll usually handle this securely (hashing happens on server)
       
            
      })

    const handleSignup = async(e) =>{
      e.preventDefault();
      console.log("Submitting user data:", user);
      try {
      await axios
            .post("http://localhost:3000/api/user",  { ...user, role: "member" })
            .then((res) => {
              console.log("User added successfully:", res.data);
              toast.success("User added successfully");
              setUser({
                name: "",
                email: "",
                password: "",
               
              });
            })
        
}
catch (error){
  if (error.response) {
    // Server responded with a status != 2xx
    console.error("Error response:", error.response.data);
    toast.error(error.response.data.message || "Failed to add user");
  } else if (error.request) {
    // Request made but no response (server down, CORS issue, etc.)
    console.error("No response from server:", error.request);
    toast.error("No response from server");
  } else {
    // Something else went wrong
    console.error("Error setting up request:", error.message);
    toast.error("Unexpected error occurred");
  }
}
 }
    const handleGetUsers = async() =>{
      try {
        const res = await axios.get("http://localhost:3000/api/user")
        console.log("Fetched users:", res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

return(
    <>
    <form onSubmit={handleSignup} className=''>
     <input 
     type= "text"
     placeholder='Enter name'
     value={user.name}
     onChange={(e)=>setUser({...user,name:e.target.value})}
     required
     />
     <input 
     type= "text"
     placeholder='Email'
     value={user.email}
     onChange={(e) => setUser({ ...user, email: e.target.value })}
     required
     />
    <input
        type="password"
        placeholder="Enter password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
    />
    
    <button className="button" type="submit">Submit</button>
    </form>
    </>
)  }