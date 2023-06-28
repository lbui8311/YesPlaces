import { BrowserRouter, Routes, Route } from "react-router-dom";
import YesPlacesProfile from "./pages/YesPlacesProfile";
import YesPlacesAbout from "./pages/YesPlacesAbout";
import Layout from "./pages/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<YesPlacesProfile />} />
          <Route path="YesPlacesAbout" element={<YesPlacesAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
