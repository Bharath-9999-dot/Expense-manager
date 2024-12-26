import { useState } from "react";
import ExpenseForm from "./components/expenseForm/ExpenseForm";
import ExpenseList from "./components/expenseList/ExpenseList";
import ExpenseSummary from "./components/expenseSummary/ExpenseSummary";
import "./App.css";

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    return (
        <div className="app">
            <h1 className="app-title">💰 Expense Tracker</h1>
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseSummary expenses={expenses} />
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default App;
