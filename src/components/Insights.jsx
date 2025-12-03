import React from 'react';
import { TrendingUp, AlertCircle, Target } from 'lucide-react';

function Insights({ data }) {
  const { income, expenses, emis, monthlyBalance, formatCurrency, totalEmiAmount } = data;
  
  const getEmiPriority = (emi) => {
    const remainingAmount = emi.totalAmount - (emi.totalAmount - emi.amount * emi.remainingMonths);
    const interestBurden = emi.interestRate * emi.remainingMonths;
    const score = (remainingAmount * 0.4) + (interestBurden * 0.6);
    return score;
  };

  const sortedEmis = [...emis].sort((a, b) => getEmiPriority(a) - getEmiPriority(b));

  const pieData = [
    { name: 'Rent', value: expenses.rent, fill: '#8b5cf6' },
    { name: 'Home Country Transfer', value: expenses.indiaTransfer, fill: '#3b82f6' },
    { name: 'EMIs', value: totalEmiAmount, fill: '#ef4444' },
    { name: 'Other Expenses', value: expenses.others.reduce((sum, exp) => sum + exp.amount, 0), fill: '#f59e0b' },
    { name: 'Savings', value: Math.max(0, monthlyBalance), fill: '#10b981' }
  ].filter(item => item.value > 0);

  const savingsRate = income.monthly > 0 ? Math.round((monthlyBalance / income.monthly) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Financial Insights</h2>
        
        {/* Savings Rate */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Savings Rate
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all"
                style={{ width: `${Math.max(0, Math.min(100, savingsRate))}%` }}
              />
            </div>
            <span className="font-bold text-lg">{savingsRate}%</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {monthlyBalance >= 0 
              ? `You're saving ${formatCurrency(monthlyBalance)} per month`
              : `You're overspending by ${formatCurrency(Math.abs(monthlyBalance))} per month`
            }
          </p>
        </div>

        {/* EMI Recommendations */}
        {sortedEmis.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              EMI Close-out Strategy
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800 mb-3">
                Recommended order to close EMIs (easiest first):
              </p>
              <ol className="space-y-2">
                {sortedEmis.map((emi, index) => (
                  <li key={emi.id} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <span className="font-medium">{emi.name}</span>
                      <span className="text-sm text-gray-600 ml-2">
                        ({emi.remainingMonths} months, {formatCurrency(emi.amount * emi.remainingMonths)} remaining)
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Expense Breakdown */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Expense Breakdown</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-sm">{item.name}:</span>
                <span className="font-bold text-sm">{formatCurrency(item.value)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {monthlyBalance > 0 && sortedEmis.length > 0 && sortedEmis[0].amount * sortedEmis[0].remainingMonths <= monthlyBalance * 3 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  💡 You could close "{sortedEmis[0].name}" in 3 months with your current savings rate!
                </p>
              </div>
            )}
            {expenses.others.reduce((sum, exp) => sum + exp.amount, 0) > income.monthly * 0.2 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-medium">
                  ⚠️ Other expenses exceed 20% of income. Consider reviewing discretionary spending.
                </p>
              </div>
            )}
            {savingsRate < 10 && savingsRate >= 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 font-medium">
                  📊 Your savings rate is below 10%. Try to increase it to at least 20% for financial security.
                </p>
              </div>
            )}
            {monthlyBalance < 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">
                  🚨 You're spending more than you earn. Review your expenses immediately.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;