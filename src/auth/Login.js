// components/Login.js
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
// import Home from "../component/pages/Home";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
    //   alert("Invalid Email or Password")
    }
  };

  return (
    <div>
     
      

      <div class="min-h-screen flex items-center justify-center bg-blue-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    {/* <!-- Title --> */}
    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Log In to Your Account</h2>
    
    {/* <!-- Form --> */}
    <form class="space-y-4">
      {/* <!-- Email --> */}
      <div>
        <label class="block text-gray-600 mb-1" for="email">Email Address</label>
        <input type="email" id="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required/>
      </div>

      {/* <!-- Password --> */}
      <div>
        <label class="block text-gray-600 mb-1" for="password">Password</label>
        <input type="password" id="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required/>
      </div>

      {/* <!-- Login Button --> */}
       <Link to={"/home"}><button type="submit" onClick={handleLogin} class="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
        Log In
      </button></Link> 
    </form>
    
    {/* <!-- Forgot Password --> */}
    <Link to={"/"}><p class="text-center text-gray-600 mt-4">
      <a href="#" class="text-blue-500 hover:underline">Forgot your password?</a>
    </p></Link>

    {/* <!-- Sign Up Prompt --> */}
    <Link to={"/"}><p class="text-center text-gray-600 mt-2">
      Don't have an account? <a href="#" class="text-blue-500 hover:underline">Sign up</a>
    </p></Link>
  </div>
</div>

    </div>

    
  );
}

export default Login;
