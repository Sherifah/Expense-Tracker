import React from 'react'
import ExpenseItem from './ExpenseItem'


function Expenses(props) {

    const expenseList = props.expenses.map((item) => {
        return <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}  />
    })

  return (
    <div className='p-4 bg-cardbg my-8 mx-auto w-[50rem] max-w-[95%] rounded-xl shadow-card'>
        {expenseList}
    </div>
  )
}

export default Expenses
