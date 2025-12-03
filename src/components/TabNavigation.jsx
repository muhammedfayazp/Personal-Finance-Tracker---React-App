import React from 'react';

function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = ['dashboard', 'income', 'expenses', 'emis', 'insights'];

  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 rounded-xl font-medium transition-all capitalize ${
            activeTab === tab 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
              : 'glass-effect text-gray-700 hover:shadow-md'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;