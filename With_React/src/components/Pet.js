import Pet from "../PetRestaurant";
import '../index.css';
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Recipes from "../Recipe";
import './Petind.css';
import Restaurant from "../Restaurant";
// import PetRestaurant from "../PetRestaurant";
import Hotel from "../Hotel";
import Profile from "../Profile";
import About from "../About";

function App() {
  return (
    <>
      <Routes>
      <Route path= '/' element={<Pet/>}/>
        <Route path= '/Pet-Restaurants' element={<Pet/>}/>
        <Route path= '/Recipes' element={<Recipes/>}/>
        <Route path= '/Restaurant' element={<Restaurant/>}/>
        <Route path= '/Hotel' element={<Hotel/>}/>
        <Route path= '/Profile' element={<Profile/>}/>
        <Route path= '/About' element={<Recipes/>}/>
      </Routes>
    </>
  );
}

export default App;
