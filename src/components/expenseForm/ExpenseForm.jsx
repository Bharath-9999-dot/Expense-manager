import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: Math.random().toString(),
            title,
            amount: parseFloat(amount),
            date: new Date(date),
        };
        onAddExpense(expense);
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Expense Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
