import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Income from './components/Income';
import Expenses from './components/Expenses';
import EMIs from './components/EMIs';
import Insights from './components/Insights';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import './App.css';

function App() {
  const [income, setIncome] = useState({
    monthly: 0,
    currency: 'USD'
  });

  const [expenses, setExpenses] = useState({
    rent: 0,
    indiaTransfer: 0,
    others: []
  });

  const [emis, setEmis] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('financeData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setIncome(parsed.income || { monthly: 0, currency: 'USD' });
      setExpenses(parsed.expenses || { rent: 0, indiaTransfer: 0, others: [] });
      setEmis(parsed.emis || []);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    const dataToSave = { income, expenses, emis };
    localStorage.setItem('financeData', JSON.stringify(dataToSave));
  }, [income, expenses, emis]);

  // Calculations
  const totalExpenses = expenses.rent + expenses.indiaTransfer + 
    expenses.others.reduce((sum, exp) => sum + exp.amount, 0);
  const totalEmiAmount = emis.reduce((sum, emi) => sum + emi.amount, 0);
  const monthlyBalance = income.monthly - totalExpenses - totalEmiAmount;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: income.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const appData = {
    income,
    expenses,
    emis,
    totalExpenses,
    totalEmiAmount,
    monthlyBalance,
    formatCurrency
  };

  const appActions = {
    setIncome,
    setExpenses,
    setEmis
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="tab-content">
          {activeTab === 'dashboard' && <Dashboard data={appData} />}
          {activeTab === 'income' && <Income income={income} setIncome={setIncome} />}
          {activeTab === 'expenses' && <Expenses expenses={expenses} setExpenses={setExpenses} formatCurrency={formatCurrency} />}
          {activeTab === 'emis' && <EMIs emis={emis} setEmis={setEmis} formatCurrency={formatCurrency} />}
          {activeTab === 'insights' && <Insights data={appData} />}
        </div>
      </div>
    </div>
  );
}

export default App;