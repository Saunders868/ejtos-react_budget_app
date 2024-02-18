import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  BUDGET_TOO_HIGH_ERROR_MESSAGE,
  BUDGET_TOO_LOW_ERROR_MESSAGE,
} from "../constants";

const Budget = () => {
  const { budget, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    if (event.target.value > 20000) {
      alert(BUDGET_TOO_HIGH_ERROR_MESSAGE);
    } else if (event.target.value < 960) {
      alert(BUDGET_TOO_LOW_ERROR_MESSAGE);
    } else {
      setNewBudget(event.target.value);
    }
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        max={20000}
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
