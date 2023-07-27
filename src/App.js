import React from "react";
import expenses from "./expenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {

    return (
        <div className="">   
            <NewExpense />   
            <Expenses expenses={expenses}/>
        </div>
    )
}

export default App;
