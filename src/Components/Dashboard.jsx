import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = ({
  // do not change this
  data, isAsc, setIsAsc, isLoading
}) => {

  return (
    <div>
      <button
        data-testid="sorting-btn"
      >
        Top 10 Employees
      </button>

      <div data-testid = "loading-indicator" > ...Loading </div>

      <div data-testid="employee-data">
        {/* <EmployeeName /> */}
        {/* <EmployeeSalary /> */}
      </div>
      
    </div>
  );
};
