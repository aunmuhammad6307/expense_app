import './expenses.css';
import ExpenseFilter from '../filterByYear/filterByYear';
import Expenseitems from './expenseitems';
import ExpenseChart from './expenseChart';
import {useState} from 'react';
import Card from "../UI/card";


const Expenses = (props) => {

    const [filterYear, setfilterYear] = useState('all_expenses');

    const filterChangeHandler = (selectedYear) => {
      setfilterYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        if(filterYear === 'all_expenses'){
            return expense;
        }
        return expense.date.getFullYear().toString() === filterYear;
    })

    return (
        <div>
            <ExpenseFilter 
                selected = {filterYear} 
                onChangeFilter = {filterChangeHandler} 
            />
            <ExpenseChart expenses={filteredExpenses} /><br></br>
            <Card className= "expenses">
                {filteredExpenses.length === 0 && <p>No expenses found</p>}
                {filteredExpenses.map((expense) => (
                    <Expenseitems
                        key = {expense.id}
                        title = {expense.title}
                        price = {expense.amount}
                        date = {expense.date}
                    />
                ))}
            </Card> 
        </div>
    )
}

export default Expenses;