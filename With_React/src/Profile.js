// import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Pages from "./components/Pages";
// import Profiletab from "./components/Profiletab-P";
// import picnic from "./components/picnic-pic.jpg";
import { useState, useEffect } from 'react';
import PagesPlaces from "./components/PagesPlaces";
import PagesName from "./components/PagesName";
import PagesRecipes from "./components/PagesRecipes";

const App = () => {
  const [personal, setPersonal] = useState([])
  const [place, setPlace] = useState([])
  const [recipe, setRecipe] = useState([])

  
  useEffect(() => {
    const getPersonal = async () => {
      const personalFromServer = await fetchPersonal()
      setPersonal(personalFromServer)
    }
    
    getPersonal()
  }, [])

  useEffect(() => {
    const getPlace= async () => {
      const placeFromServer = await fetchPlace()
      setPlace(placeFromServer)
    }
    
    getPlace()
  }, [])

  useEffect(() => {
    const getRecipe= async () => {
      const recipeFromServer = await fetchRecipe()
      setRecipe(recipeFromServer)
    }
    
    getRecipe()
  }, [])

  //Fetch Tasks
  const fetchPersonal = async () => {
    const res = await fetch('http://localhost:8000/profile/')
    const data = await res.json()

    console.log(data)
    return data
  } 

  //Fetch Tasks
  const fetchPlace = async () => {
    const res1 = await fetch('http://localhost:8000/profile-Place/')
    const data1 = await res1.json()

    console.log(data1)
    return data1
  } 

  //Fetch Tasks
  const fetchRecipe = async () => {
    const res2 = await fetch('http://localhost:8000/profile-Recipe/')
    const data2 = await res2.json()

    console.log(data2)
    return data2
  } 

  const addPersonalInfo = async (personals) => {
    const res = await fetch('http://localhost:8000/profile/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(personals)
    })

    const data = await res.json()
    setPersonal([...personal, data])
  }

  const addPlaceInfo = async (places) => {
    const res1 = await fetch('http://localhost:8000/profile-Place/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(places)
    })

    const data1 = await res1.json()
    setPlace([...place, data1])
  }

  const addRecipeInfo = async (recipes) => {
    const res2 = await fetch('http://localhost:8000/profile-Recipe/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(recipes)
    })

    const data2 = await res2.json()
    setRecipe([...recipe, data2])
  }

  return (
    
    <div style={{ 
      // backgroundImage: `url(${picnic})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      WebkitBackgroundSize: 'cover',
      }}>
        

      <div className="row mt-2" style={{paddingTop: 10}}>
            <div className="col col-md-auto m-2"> 
                <div className="row button-page">
                    {/*Do not delete this for formating purposes*/}
                </div>
           </div>
           <div className="co; col-md-auto m-2"> 
                <div className="row place-page" style={{padding: 20, borderRadius: 20, backgroundColor: '#C4EBFF', border: '2px solid black'}}>
                    <PagesPlaces onAdd={addPlaceInfo}/>
                </div>
           </div>

           <div className="col col-md-auto" >

                <div className="row name-page mt-2" style={{ padding: 20, borderRadius: 20, height: 250, backgroundColor: '#C4EBFF', border: '2px solid black'}}>
                  <PagesName onAdd={addPersonalInfo} />
                </div>

                <div className="row recipe-page mt-1" style={{ padding: 20, borderRadius: 20, height: 420, backgroundColor: '#C4EBFF', border: '2px solid black'}}>
                  <PagesRecipes onAdd={addRecipeInfo}/>
                </div>
           </div>
        </div>
    </div>
  );
}

export default App;