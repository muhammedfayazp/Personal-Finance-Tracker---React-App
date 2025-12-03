import React from 'react';

function Header() {
  return (
    <div className="glass-effect rounded-2xl p-6 mb-8 shadow-xl">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        Personal Finance Tracker
      </h1>
      <p className="text-gray-600">Track your income, expenses, remittances, and EMIs in one place</p>
    </div>
  );
}

export default Header;