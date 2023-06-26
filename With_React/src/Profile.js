import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./components/Pages";
import Profiletab from "./components/Profiletab-P";
// import picnic from "./components/picnic-pic.jpg";
import { useState } from 'react';

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
      <Pages addPersonalInfo={addPersonal}/>
    </div>
  );
}

export default App;