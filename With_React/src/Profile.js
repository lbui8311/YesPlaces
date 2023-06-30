import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "./components/Pages";
import Profiletab from "./components/Profiletab-P";
// import picnic from "./components/picnic-pic.jpg";
import { useState, useEffect } from 'react';
import PagesPlaces from "./components/PagesPlaces";
import PagesName from "./components/PagesName";
import PagesRecipes from "./components/PagesRecipes";

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
    const res = await fetch('http://localhost:8000/users/')
    const data = await res.json()

    console.log(data)
    return data
  } 

  const addPersonalInfo = async (personals) => {
    const res = await fetch('http://localhost:8000/users/',{
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
      // backgroundImage: `url(${picnic})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      WebkitBackgroundSize: 'cover',
      }}>
        

      <div className="row mt-2">
            <div className="col col-md-auto m-2"> 
                <div className="row button-page">
                    {/*Do not delete this for formating purposes*/}
                </div>
           </div>
           <div className="co; col-md-auto m-2"> 
                <div className="row place-page" style={{marginTop: 40, backgroundColor: 'white', padding: 20, borderRadius: 20, backgroundColor: '#C4EBFF', border: '2px solid black', borderRadius: 20}}>
                    <PagesPlaces onAdd={addPersonalInfo}/>
                </div>
           </div>

           <div className="col col-md-auto" style={{marginTop: 40,}} >

                <div className="row name-page mt-2" style={{backgroundColor: 'white', padding: 20, borderRadius: 20, height: 250, backgroundColor: '#C4EBFF', border: '2px solid black', borderRadius: 20}}>
                  <PagesName onAdd={addPersonalInfo} />
                </div>

                <div className="row recipe-page mt-1" style={{backgroundColor: 'white', padding: 20, borderRadius: 20, height: 420, backgroundColor: '#C4EBFF', border: '2px solid black', borderRadius: 20}}>
                  <PagesRecipes onAdd={addPersonalInfo}/>
                </div>
           </div>
        </div>
    </div>
  );
}

export default App;