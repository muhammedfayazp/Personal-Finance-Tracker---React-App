import React from 'react';

function Income({ income, setIncome }) {
  const currencies = [
    { code: 'USD', symbol: '$', name: 'USD' },
    { code: 'EUR', symbol: '€', name: 'EUR' },
    { code: 'GBP', symbol: '£', name: 'GBP' },
    { code: 'INR', symbol: '₹', name: 'INR' },
    { code: 'AED', symbol: 'د.إ', name: 'AED' },
    { code: 'SAR', symbol: '﷼', name: 'SAR' }
  ];

  return (
    <div className="glass-effect rounded-xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Monthly Income Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="monthly-income" className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Income Amount
          </label>
          <input
            id="monthly-income"
            type="number"
            value={income.monthly}
            onChange={(e) => setIncome({ ...income, monthly: parseFloat(e.target.value) || 0 })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your monthly income"
          />
        </div>
        <div>
          <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
            Currency
          </label>
          <select
            id="currency"
            value={income.currency}
            onChange={(e) => setIncome({ ...income, currency: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {currencies.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.name} ({curr.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Income;