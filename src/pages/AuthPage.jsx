import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 text-black bg-gray-100" 
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 text-black bg-gray-100" 
              required 
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            {isLogin && (
              <button 
                type="button" 
                onClick={() => setShowModal(true)} 
                className="text-indigo-500 hover:underline text-sm">
                Forgot password?
              </button>
            )}
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)} 
            className="w-full text-sm text-gray-500 hover:text-indigo-500 transition-colors">
            {isLogin ? "Create an account" : "Already have an account? Login"}
          </button>
          <div className="flex justify-center space-x-4 mt-4">
            <button type="button" className="bg-blue-600 text-white py-2 px-4 rounded-full">
              Login with Google
            </button>
            <button type="button" className="bg-gray-800 text-white py-2 px-4 rounded-full">
              Login with Apple
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-2">Reset Password</h3>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 border rounded-md mb-4 text-black bg-gray-100" 
            />
            <button 
              className="bg-indigo-600 text-white w-full py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Send Reset Link
            </button>
            <button 
              onClick={() => setShowModal(false)} 
              className="w-full mt-2 text-gray-500 text-sm hover:underline">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
