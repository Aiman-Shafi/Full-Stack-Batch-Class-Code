import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Navbar from "./components/Navbar";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      category: "Utility",
      description: "House hold expense",
      amount: 100,
    },
    {
      id: 2,
      category: "Utility",
      description: "test",
      amount: 100,
    },
    {
      id: 3,
      category: "Groceries",
      description: "House hold expense",
      amount: 200,
    },
    {
      id: 4,
      category: "Groceries",
      description: "House hold expense",
      amount: 50,
    },
    {
      id: 5,
      category: "Groceries",
      description: "House hold expense",
      amount: 100,
    },
  ]);

  // remove an item from array
  const deleteItem = (id) => {
    setExpenses(expenses.filter((e) => e.id != id));
  };

  // filter using category
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[800px] mx-auto p-4 rounded-xl mt-10">
        <ExpenseForm addExpense={addExpense} />
        <div className="max-w-[800px] mx-auto border-gray-700 border-2 p-4 rounded-xl mt-10">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList expenses={filterCategory} onDelete={deleteItem} />
        </div>
      </div>
    </>
  );
}

export default App;
