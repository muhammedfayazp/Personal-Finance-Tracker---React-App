import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

function Expenses({ expenses, setExpenses, formatCurrency }) {
  const [newExpense, setNewExpense] = useState({
    name: '',
    amount: 0
  });

  const addOtherExpense = () => {
    if (newExpense.name && newExpense.amount > 0) {
      setExpenses({
        ...expenses,
        others: [...expenses.others, { ...newExpense, id: Date.now() }]
      });
      setNewExpense({ name: '', amount: 0 });
    }
  };

  const removeOtherExpense = (id) => {
    setExpenses({
      ...expenses,
      others: expenses.others.filter(exp => exp.id !== id)
    });
  };

  return (
    <div className="space-y-6">
      {/* Fixed Expenses */}
      <div className="glass-effect rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Fixed Expenses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="rent" className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Rent
            </label>
            <input
              id="rent"
              type="number"
              value={expenses.rent}
              onChange={(e) => setExpenses({ ...expenses, rent: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter monthly rent"
            />
          </div>
          <div>
            <label htmlFor="remittance" className="block text-sm font-medium text-gray-700 mb-2">
              Money to Home Country
            </label>
            <input
              id="remittance"
              type="number"
              value={expenses.indiaTransfer}
              onChange={(e) => setExpenses({ ...expenses, indiaTransfer: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter amount sent to home country"
            />
          </div>
        </div>
      </div>

      {/* Other Expenses */}
      <div className="glass-effect rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Other Expenses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="expense-name" className="block text-sm font-medium text-gray-700 mb-2">
              Expense Name
            </label>
            <input
              id="expense-name"
              type="text"
              value={newExpense.name}
              onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Groceries, Internet, etc."
            />
          </div>
          <div>
            <label htmlFor="expense-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              id="expense-amount"
              type="number"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) || 0 })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={addOtherExpense}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Add Expense
            </button>
          </div>
        </div>

        {expenses.others.length > 0 && (
          <div className="space-y-2">
            {expenses.others.map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">{expense.name}</span>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-purple-600">{formatCurrency(expense.amount)}</span>
                  <button
                    onClick={() => removeOtherExpense(expense.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Expenses;