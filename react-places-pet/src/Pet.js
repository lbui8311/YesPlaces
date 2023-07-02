import Grid1 from "./components/Grid1";
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route>
           <Grid1 />
        </Route>
      </Routes>
    </>
  );
}

export default App;
