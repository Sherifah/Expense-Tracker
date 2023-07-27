import React, { useState } from "react";

function NewExpense() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: new Date(""),
  });

  function titleChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  }

  function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  }

  function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log(userInput);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: new Date(""),
    })
  }

  return (
    <div>
      <form
        className="bg-formbg p-4 my-8 mx-auto w-[50rem] max-w-[90%] rounded-xl text-center shadow-card"
        onSubmit={submitHandler}
      >
        <div className="flex flex-wrap gap-4 mb-4 text-left">
          <div className="new-expense-control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={userInput.enteredTitle}
            />
          </div>
          <div className="new-expense-control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={userInput.enteredAmount}
            />
          </div>
          <div className="new-expense-control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={userInput.enteredDate}
            />
          </div>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="text-inherit cursor-pointer px-8 py-4 border-200 bg-200 text-white rounded-xl mr-4 hover:bg-btnstate hover:border-btnstate active:bg-btnstate active:border-btnstate"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
