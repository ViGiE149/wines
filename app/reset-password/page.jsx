"use client"
import React, { useState } from 'react';
import Link from 'next/link' // Assuming you are using React Router for navigation

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset logic goes here');
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full p-6  rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none"
          >
            Reset Password
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-600">Remembered your password? </span>
            <Link href="/login" className="text-blue-500 hover:underline">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
