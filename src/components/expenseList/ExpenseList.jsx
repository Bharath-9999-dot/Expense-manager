import "./ExpenseList.css";

const ExpenseList = ({ expenses }) => {
    return (
        <div className="expense-list">
            {expenses.length === 0 ? (
                <p className="no-expenses">No expenses added yet.</p>
            ) : (
                expenses.map((expense) => (
                    <div key={expense.id} className="expense-item">
                        <div>
                            <h3>{expense.title}</h3>
                            <p>{expense.date.toDateString()}</p>
                        </div>
                        <div className="expense-amount">${expense.amount.toFixed(2)}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ExpenseList;
