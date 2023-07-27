import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("en-US", { day: "numeric" });

  return (
    <div className="flex flex-col w-[5.5rem] h-[5.5rem] border-[1px] border-border bg-datebg text-white rounded-xl items-center justify-center">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{year}</div>
      <div className="text-2xl font-bold">{day}</div> 
    </div>
  );
}

export default ExpenseDate;
