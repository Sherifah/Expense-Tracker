import React from 'react'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
 
  return (
    <div className='flex md:flex-row flex-col flex-1  items-center justify-start shadow-lg p-2 mx-0 my-4 bg-100 rounded-xl'>
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className='flex items-center justify-between flex-1'>
            <h2 className='md:text-xl text-base mx-4 text-white flex-1'>{props.title}</h2>
            <div className='md:text-xl text-base font-bold text-white bg-200 py-2 px-6 md:p-2 rounded-xl border-white'>{props.amount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem
