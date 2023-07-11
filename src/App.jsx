import { useState } from "react";
import Card from "./components/UI/card";
import Expenses from "./components/Allexpensesdisplay/expenses";
import AddNewExpense from './components/addExpense/addNewExpense';
import './App.css'

const dummyexpense = [
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
  },
  {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
  },
  {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
  },
  {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
  }
];

function App() {

  const [expenses, setExpenses] = useState(dummyexpense);
  const [displayAddButton, setDisplayAddButton] = useState(true);
  const [displayAddExpense, setDisplayAddExpense] = useState(false);


  const onAddExpenseHandler = (expense) => {
    console.log(expense.date);
    if(expense.amount === '' || expense.title === '' || expense.date == 'Invalid Date'){
      alert('Please enter valid input');
      return;
    }
    setExpenses((prevExpenses) => {
      setDisplayAddButton(true);
      setDisplayAddExpense(false);
      return [expense, ...prevExpenses]
    })
  }
  const showAddExpense = () => {
    setDisplayAddButton(false);
    setDisplayAddExpense(true);
  };



  return (
    <>
    <div className="new-expense">
        {displayAddButton && <button onClick={showAddExpense} > Add New Expense </button>}
        {displayAddExpense && <AddNewExpense onAddExpense = {onAddExpenseHandler} />}
    </div>

    <Card className= "container">
      <Expenses items={expenses} />
    </Card>
    </>
  )
}

export default App
