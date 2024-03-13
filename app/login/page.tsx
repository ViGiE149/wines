// pages/login.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e:any) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login logic goes here');
  };

  return (
    <div className= " min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full p-6 bg-gray rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
          <div className="text-center">
            <Link href="/register" className="text-blue-500 hover:underline">Register an Account</Link>
          </div>
          <div className="text-center">
            <Link href="/reset-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
