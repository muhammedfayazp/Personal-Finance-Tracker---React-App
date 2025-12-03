import React, { useState } from 'react';
import { X } from 'lucide-react';

function EMIs({ emis, setEmis, formatCurrency }) {
  const [newEmi, setNewEmi] = useState({
    name: '',
    amount: 0,
    remainingMonths: 0,
    totalAmount: 0,
    interestRate: 0
  });

  const addEmi = () => {
    if (newEmi.name && newEmi.amount > 0) {
      setEmis([...emis, { ...newEmi, id: Date.now() }]);
      setNewEmi({
        name: '',
        amount: 0,
        remainingMonths: 0,
        totalAmount: 0,
        interestRate: 0
      });
    }
  };

  const removeEmi = (id) => {
    setEmis(emis.filter(emi => emi.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Add New EMI */}
      <div className="glass-effect rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New EMI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="emi-name" className="block text-sm font-medium text-gray-700 mb-2">
              EMI Name
            </label>
            <input
              id="emi-name"
              type="text"
              value={newEmi.name}
              onChange={(e) => setNewEmi({ ...newEmi, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500"
              placeholder="e.g., Car Loan, Home Loan"
            />
          </div>
          <div>
            <label htmlFor="emi-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Monthly EMI Amount
            </label>
            <input
              id="emi-amount"
              type="number"
              value={newEmi.amount}
              onChange={(e) => setNewEmi({ ...newEmi, amount: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500"
              placeholder="Enter monthly payment"
            />
          </div>
          <div>
            <label htmlFor="emi-months" className="block text-sm font-medium text-gray-700 mb-2">
              Remaining Months
            </label>
            <input
              id="emi-months"
              type="number"
              value={newEmi.remainingMonths}
              onChange={(e) => setNewEmi({ ...newEmi, remainingMonths: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500"
              placeholder="Months left to pay"
            />
          </div>
          <div>
            <label htmlFor="emi-total" className="block text-sm font-medium text-gray-700 mb-2">
              Total Loan Amount
            </label>
            <input
              id="emi-total"
              type="number"
              value={newEmi.totalAmount}
              onChange={(e) => setNewEmi({ ...newEmi, totalAmount: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500"
              placeholder="Original loan amount"
            />
          </div>
          <div>
            <label htmlFor="emi-interest" className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (%)
            </label>
            <input
              id="emi-interest"
              type="number"
              step="0.1"
              value={newEmi.interestRate}
              onChange={(e) => setNewEmi({ ...newEmi, interestRate: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500"
              placeholder="Annual interest rate"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={addEmi}
              className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Add EMI
            </button>
          </div>
        </div>
      </div>

      {/* Current EMIs */}
      <div className="glass-effect rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Current EMIs</h2>
        {emis.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No EMIs added yet</p>
        ) : (
          <div className="space-y-4">
            {emis.map((emi) => {
              const remainingAmount = emi.amount * emi.remainingMonths;
              return (
                <div key={emi.id} className="border rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{emi.name}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Monthly EMI:</span>
                          <p className="font-semibold">{formatCurrency(emi.amount)}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Remaining:</span>
                          <p className="font-semibold">{emi.remainingMonths} months</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Total Remaining:</span>
                          <p className="font-semibold">{formatCurrency(remainingAmount)}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Interest Rate:</span>
                          <p className="font-semibold">{emi.interestRate}%</p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeEmi(emi.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default EMIs;