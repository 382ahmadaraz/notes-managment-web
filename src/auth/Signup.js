// components/Register.js
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    
    try{
            console.log("register suuccesfully");
            
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/login");
    }
    catch{
   
        alert("fill all the fields")
    } 
  };

  return (
    
<div class="min-h-screen flex items-center justify-center bg-blue-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    {/* <!-- Title --> */}
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
    
    {/* <!-- Form --> */}
    <form class="space-y-4" onSubmit={handleRegister}>
      {/* <!-- Username --> */}
      <div>
        <label class="block text-gray-600 mb-1" for="username">Username</label>
        <input type="text" id="username" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your username"/>
      </div>

      {/* <!-- Email --> */}
      <div>
        <label class="block text-gray-600 mb-1" for="email">Email Address</label>
        <input type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"/>
      </div>

      {/* <!-- Password --> */}
      <div>
        <label class="block text-gray-600 mb-1" for="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password"/>
      </div>

      {/* <!-- Confirm Password --> */}
      <div>
        <label class="block text-gray-600 mb-1" for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm your password"/>
      </div>

      {/* <!-- Sign Up Button --> */}
       <Link to={'/login'}>
       <button type="submit"  class="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
        Sign Up
      </button> </Link>
    </form>
    
    {/* <!-- Already have an account? --> */}
    <p class="text-center text-gray-600 mt-6">
      Already have an account? <Link to={"/login"}  class="text-blue-500 hover:underline">Log in </Link>
    </p>
  </div>
</div>


  );
}

export default Register;
