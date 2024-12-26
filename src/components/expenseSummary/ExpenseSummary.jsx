
import "./ExpenseSummary.css";

const ExpenseSummary = ({ expenses }) => {
    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className="expense-summary">
            <h2>Total Expense: ${totalExpense.toFixed(2)}</h2>
        </div>
    );
};

export default ExpenseSummary;
