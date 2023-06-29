import PagesRecipes from '../components/PagesRecipes';
import PagesName from '../components/PagesName';
import PagesPlaces from '../components/PagesPlaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import picnic from "../components/picnic-pic.jpg"
import { useState, useEffect } from 'react';

const YesPlacesProfile = () => {
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

  const addPersonalInfo = async (personals) => {
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
        

      <div className="row mt-2">
            <div className="col col-md-auto m-2"> 
                <div className="row button-page">
                    {/*Do not delete this for formating purposes*/}
                </div>
           </div>
           <div className="co; col-md-auto m-2"> 
                <div className="row place-page">
                    <PagesPlaces onAdd={addPersonalInfo}/>
                </div>
           </div>

           <div className="col col-md-auto ">

                <div className="row name-page mt-2">
                  <PagesName onAdd={addPersonalInfo} />
                </div>

                <div className="row recipe-page mt-1">
                  <PagesRecipes onAdd={addPersonalInfo}/>
                </div>
           </div>
        </div>
    </div>
  );
}

export default YesPlacesProfile;
