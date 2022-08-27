import React, { useEffect, useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [isAsc, setIsAsc] = useState(false);
  const [isLoading, setsIsLoading] = useState(false)

  return (
    <div className="App">
      {/* <Dashboard /> */}
    </div>
  );
}
