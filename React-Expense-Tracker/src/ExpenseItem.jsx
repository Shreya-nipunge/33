function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <div>
        <h3>{expense.title}</h3>
        <p>{expense.category}</p>
      </div>

      <div className="expense-right">
        <strong>₹{expense.amount}</strong>

        <button
          onClick={() => onDelete(expense.id)}
          className="delete-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;