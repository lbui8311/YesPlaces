import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./components/Pages";
import Profiletab from "./components/Profiletab-P";
// import picnic from "./components/picnic-pic.jpg";
import { useState } from 'react';
import PagesPlaces from "./components/PagesPlaces";
import PagesName from "./components/PagesName";
import PagesRecipes from "./components/PagesRecipes";

const App = () => {
  const [personal, setPersonal] = useState([
  {
  },
])

  const addPersonal = (personals) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newPersonal = {id, ...personals}
    setPersonal([...personal, newPersonal])
  }

  return (
    <div style={{ 
      // backgroundImage: `url(${picnic})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      WebkitBackgroundSize: 'cover',
      }}>
        
      {/* <Profiletab addName={addPersonal}/>
      <Navbar /> */}
      {/*<Pages addPersonalInfo={addPersonal}/>*/}

      <div className="row mt-2">
            <div className="col col-md-auto m-2"> 
                <div className="row button-page">
                   {/*Do not delete this space*/} 
                </div>
           </div>
           <div className="co; col-md-auto m-2"> 
                <div className="row place-page">
                    <PagesPlaces onAdd={addPersonal}/>
                </div>
           </div>

           <div className="col col-md-auto ">
                <div className="row name-page mt-2">
                    <PagesName onAdd={addPersonal} />
                </div>
                <div className="row recipe-page mt-1">
                    <PagesRecipes onAdd={addPersonal}/>
                </div>
           </div>
        </div>
    </div>
  );
}

export default App;