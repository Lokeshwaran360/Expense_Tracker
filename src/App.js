
import './App.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import NewExpense from './NewExpense';
import { useState } from 'react';


const DUMMY_EXPENSES = [
  {
   title : "Car Insurance",
   date : new Date(2022, 0, 5), 
   amount : 265, 
   locationEx : "chennai",
   objId : 0
  },
  {
    title : "Octane Booster", 
    date : new Date(2022, 0, 6), 
    amount : 125, 
    locationEx : "Banglore",
    objId : 1
  },
  {
    title : "Room Spray", 
    date : new Date(2022, 4, 22), 
    amount : 35, 
    locationEx : "Kolkata",
    objId : 2
  },
  {
    title : "Keyboard", 
    date : new Date(2022, 7, 21), 
    amount : 50, 
    locationEx : "Delhi",
    objId : 3
  }
 ];

const App = () => {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const[filter, setFilter] = useState('');
    const addExpenseHandler = expense =>{
       setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses]
       })

   }
   
   
 
  return (
    
   <Card className="expenses">
   

    <NewExpense onAddExpense={addExpenseHandler}/>
    {expenses.map((expense) => (
      <ExpenseItem 
      title ={expense.title}
      amount={expense.amount}
      date = {expense.date}
        />
    ))}
    
   </Card> 
    
  );
}


export default App;

