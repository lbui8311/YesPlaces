import { BrowserRouter, Routes, Route } from "react-router-dom";
import YesPlacesProfile from "./pages/yes-places-profile/src/YesPlacesProfile";
import YesPlacesAbout from "./pages/yes-places-about/src/YesPlacesAbout";

function YesPlaces() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<YesPlacesAbout/>}>
          <Route index element={<YesPlacesProfile />} />
          <Route path="YesPlacesAbout" element={<YesPlacesAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default YesPlaces;
