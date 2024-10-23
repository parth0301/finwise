import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const investmentData = [
  { name: "Stocks", value: 40, color: "#4fd1c5" },
  { name: "Bonds", value: 30, color: "#81e6d9" },
  { name: "Crypto", value: 15, color: "#f56565" },
  { name: "Real Estate", value: 15, color: "#ed8936" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Vedant Bedekar",
    email: "parthdesai@gmail.com",
    phone: "+91 12345 67890",
    bio: "Passionate about finance and investments."
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Profile</h2>
            <button 
              onClick={isEditing ? handleSave : () => setIsEditing(true)} 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="flex space-x-4 mb-6">
            <button 
              onClick={() => setActiveTab("info")} 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "info" 
                  ? "bg-indigo-600 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}>
              Profile Info
            </button>
            <button 
              onClick={() => setActiveTab("portfolio")} 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "portfolio" 
                  ? "bg-indigo-600 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}>
              Portfolio
            </button>
            <button 
              onClick={() => setActiveTab("settings")} 
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === "settings" 
                  ? "bg-indigo-600 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}>
              Settings
            </button>
          </div>

          {/* Profile Info Tab */}
          {activeTab === "info" && (
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={userInfo.name} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 text-black disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={userInfo.email} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 text-black disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={userInfo.phone} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 text-black disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                <textarea 
                  name="bio" 
                  value={userInfo.bio} 
                  onChange={handleChange} 
                  disabled={!isEditing} 
                  rows={4}
                  className="p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 text-black disabled:bg-gray-100 dark:disabled:bg-gray-800"
                />
              </div>
            </div>
          )}

          {/* Portfolio Tab */}
          {activeTab === "portfolio" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Investment Portfolio</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie 
                      data={investmentData} 
                      dataKey="value" 
                      nameKey="name" 
                      cx="50%" 
                      cy="50%" 
                      innerRadius={60}
                      outerRadius={80} 
                      paddingAngle={5}
                    >
                      {investmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: 'none',
                        borderRadius: '4px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {investmentData.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-gray-700 dark:text-gray-200">{item.name}</span>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <span className="text-gray-700 dark:text-gray-200">Email Notifications</span>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                    <input 
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                      onChange={() => {}} 
                    />
                    <span className="absolute inset-0 bg-gray-300 peer-checked:bg-indigo-600 rounded-full cursor-pointer transition-colors" />
                    <span className="absolute inset-y-1 start-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <span className="text-gray-700 dark:text-gray-200">Dark Mode</span>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                    <input 
                      type="checkbox"
                      className="peer sr-only"
                      defaultChecked
                      onChange={() => {}}
                    />
                    <span className="absolute inset-0 bg-gray-300 peer-checked:bg-indigo-600 rounded-full cursor-pointer transition-colors" />
                    <span className="absolute inset-y-1 start-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Logout Button */}
        <div className="flex justify-end">
          <button 
            onClick={handleLogout} 
            className="bg-red-600 text-white px-4 py-2 rounded-md transition-colors hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}