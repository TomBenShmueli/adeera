import { useState, useEffect } from 'react';
import React from "react";
import "./App.css";
import TopBar from './component/TopBar/TopBar';
import FilterBar from './component/FilterBar/FilterBar';
import Stage from './component/Stage/Stage';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <TopBar />
      <FilterBar />
      <Stage />
    </div>
  );
}

export default App;