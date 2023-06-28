import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./components/Pages";
import Profiletab from "./components/Profiletab";
import picnic from "./components/picnic-pic.jpg"
import { useState, useEffect } from 'react';

const App = () => {
  const [personal, setPersonal] = useState([])
  
  useEffect(() => {
    const getPersonal = async () => {
      const personalFromServer = await fetchPersonal()
      setPersonal(personalFromServer)
    }
    
    getPersonal()
  }, [])

  //Fetch Tasks
  const fetchPersonal = async () => {
    const res = await fetch('http://localhost:5000/personal')
    const data = await res.json()

    console.log(data)
    return data
  } 

  const addPersonal = async (personals) => {
    const res = await fetch('http://localhost:5000/personal',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(personals)
    })

    const data = await res.json()
    setPersonal([...personal, data])

    //const id = Math.floor(Math.random() * 10000) + 1
    //const newPersonal = { id, ...personals }
    //setPersonal(...personal, newPersonal)
  }

  /*
  const addPersonal = async (personals) => {

    const id = (Math.floor(Math.random() * 10000) + 1)

    const newPersonal = { id, ...personals}
    setPersonal(...personal, newPersonal)    
  }
  */



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
