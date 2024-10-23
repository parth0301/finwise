import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ThemeToggle from '../components/ThemeToggle';

const data = [
  { name: "Jan", balance: 5000, spending: 1200 },
  { name: "Feb", balance: 6000, spending: 1100 },
  { name: "Mar", balance: 7000, spending: 1300 },
  { name: "Apr", balance: 8000, spending: 900 },
  { name: "May", balance: 7500, spending: 1400 },
];

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900" : "bg-gray-100"}>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: darkMode ? "white" : "black" }}>Dashboard</h1>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-black">Account Balance</h3>
          <p className="text-3xl mt-2 text-black">₹22,950.00</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-black">Monthly Spending</h3>
          <p className="text-3xl mt-2 text-black">₹2,050.00</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-black">Investment Growth</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke={darkMode ? "#ffffff" : "#000000"} />
              <YAxis stroke={darkMode ? "#ffffff" : "#000000"} />
              <Tooltip />
              <Line type="monotone" dataKey="balance" stroke="#4fd1c5" />
              <Line type="monotone" dataKey="spending" stroke="#f56565" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mx-4">
        <h3 className="text-lg font-semibold text-black mb-4">Recent Transactions</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2 text-black">Date</th>
              <th className="p-2 text-black">Description</th>
              <th className="p-2 text-black">Amount</th>
              <th className="p-2 text-black">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 text-black">20/10/2024</td>
              <td className="p-2 text-black">Starbucks</td>
              <td className="p-2 text-red-500">- ₹550</td>
              <td className="p-2 text-black">Expense</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 text-black">21/10/2024</td>
              <td className="p-2 text-black">Stipend</td>
              <td className="p-2 text-green-500">+ ₹25000.00</td>
              <td className="p-2 text-black">Income</td>
            </tr>
            <tr>
              <td className="p-2 text-black">22/10/2024</td>
              <td className="p-2 text-black">Groceries</td>
              <td className="p-2 text-red-500">- ₹1500.00</td>
              <td className="p-2 text-black">Expense</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center p-4">
        <Link to="/profile">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors">
            Go to Profile
          </button>
        </Link>
      </div>
    </div>
  );
}