import './App.css';
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AllReviews from './components/AllReviews';
import AllCategories from './components/AllCategories';
import ChosenCategoryPage from './components/ChosenCategoryPage';


function App() {
  return (
  <BrowserRouter>
    <div>
      <Header />
      <AllCategories />
      <Routes>
      <Route path="/categories/:category" element={<ChosenCategoryPage/>}/>
      <Route path="/" element={<AllReviews/>}/>
      </Routes>

    </div>
  </BrowserRouter>
  );
}



export default App;
