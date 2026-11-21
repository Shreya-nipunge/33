
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './App.css';

function App() {

  const [expenses, setExpenses] = useState([]);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  // Add a new expense
  function addExpense(e) {
    e.preventDefault();

    if (title.trim() === '' || amount === '' || Number(amount) <= 0) {
      alert('Please enter valid expense details');
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category
    };

    setExpenses([...expenses, newExpense]);

    setTitle('');
    setAmount('');
    setCategory('Food');
  }

  // Delete an expense
  function deleteExpense(id) {
    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );
  }

  // Calculate total expenses
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <div className="total-box">
        <h2>Total Expenses</h2>
        <h1>₹{total}</h1>
      </div>

      <form onSubmit={addExpense}>

        <input
          type="text"
          placeholder="Expense Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Education</option>
          <option>Other</option>
        </select>

        <button type="submit">Add Expense</button>

      </form>

      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={deleteExpense}
          />
        ))
      )}

    </div>
  );
}

export default App;
