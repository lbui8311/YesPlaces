import Pet from "./Pages/Pets-Restaurant";
import './index.css';
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Recipes from "./Pages/Recipes";
import './components/Petind.css';
function App() {
  return (
    <>
      <Routes>
      <Route path= '/' element={<Pet/>}/>
        <Route path= '/Pet-Restaurants' element={<Pet/>}/>
        <Route path= '/Recipes' element={<Recipes/>}/>
      </Routes>
    </>
  );
}

export default App;
