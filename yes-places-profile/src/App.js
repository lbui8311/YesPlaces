import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./components/Pages";
import Profiletab from "./components/Profiletab";
import picnic from "./components/picnic-pic.jpg"
import { useState } from 'react';

const App = () => {
  const [personal, setPersonal] = useState([
  {
  },
])

  const addPersonal = (personals) => {
    console.log(personals)
  }

  return (
    <div style={{ 
      backgroundImage: `url(${picnic})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      WebkitBackgroundSize: 'cover',
      }}>
        
      <Profiletab />
      <Navbar />
      <Pages addPersonalInfo={addPersonal}/>
    </div>
  );
}

export default App;
