import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Search from './components/Search';
import Result from './components/Result';

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/weather-app" element={<Search />} />
        <Route path="/weather-app/result" element={<Result />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
