import React from 'react';
import { DollarSign, TrendingDown, Calculator, Wallet } from 'lucide-react';

function Dashboard({ data }) {
  const { income, totalExpenses, totalEmiAmount, monthlyBalance, formatCurrency } = data;

  const cards = [
    {
      title: 'Monthly Income',
      value: formatCurrency(income.monthly),
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      color: 'text-green-600'
    },
    {
      title: 'Total Expenses',
      value: formatCurrency(totalExpenses + totalEmiAmount),
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      color: 'text-red-600'
    },
    {
      title: 'Monthly EMIs',
      value: formatCurrency(totalEmiAmount),
      icon: <Calculator className="w-6 h-6 text-orange-500" />,
      color: 'text-orange-600'
    },
    {
      title: 'Monthly Balance',
      value: formatCurrency(monthlyBalance),
      icon: <Wallet className="w-6 h-6 text-blue-500" />,
      color: monthlyBalance >= 0 ? 'text-blue-600' : 'text-red-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="glass-effect rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">{card.title}</span>
            {card.icon}
          </div>
          <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;