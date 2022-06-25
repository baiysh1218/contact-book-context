import React, { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import List from "./components/List/List";
import "./App.css";
import Edit from "./components/Edit/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details";
import DataContextProvaider from "./Contexts/DataContexts";

const App = () => {
  return (
    <DataContextProvaider>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/" element={<List />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvaider>
  );
};

export default App;
