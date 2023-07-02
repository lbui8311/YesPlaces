// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import React, {useState, useEffect} from 'react'
import React, { useEffect, useState } from 'react'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Restaurant from './Restaurant'
import Hotel from './Hotel'
import PetRestaurant from './PetRestaurant'
import Recipe from './Recipe'

const Main = () => {

  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=> {
    if(localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <div>
        <form className="Navbar" href="#" style={{backgroundColor: 'transparent', marginTop: 30}} >
          <button className="btn0" style={{paddingTop:10, backgroundColor: 'transparent'}}> <span class="border-text"><a href="/" style={{textDecoration: 'none', color: 'black'}}>Yes!Places</a></span></button>
          <button className="btn2" style={{margin: 2}}><a href="home" style={{textDecoration: 'none', color: 'black', padding: 45}}>Home</a></button>
          <button className="btn2" style={{margin: 2}}><a href="restaurant" style={{textDecoration: 'none', color: 'black', padding: 25}}>Restaurants</a></button>
          <button className="btn2" style={{margin: 2}}><a href="pet-restaurant" style={{textDecoration: 'none', color: 'black', padding: 8}}>Pet Restaurants</a></button>
          <button className="btn2" style={{margin: 2}}><a href="recipe" style={{textDecoration: 'none', color: 'black', padding: 5}}>Cooking Recipes</a></button>
          <button className="btn2" style={{margin: 2}}><a href="hotel" style={{textDecoration: 'none', color: 'black', padding: 45}}>Hotels</a></button>
          <button className="btn2" style={{margin: 2}}><a href="about" style={{textDecoration: 'none', color: 'black', padding: 45}}>About</a></button>
          <button className='btn2' style={{margin: 2}}>
            {isAuth ? <a href="home" style={{textDecoration: 'none', color: 'black', padding: 45}}>Logout</a> :
                      <a href="home" style={{textDecoration: 'none', color: 'black', padding: 45}}>Login</a>}      
          </button>
        </form>

        <Router>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/restaurant' element={<Restaurant />} />
          <Route exact path='/pet-restaurant' element={<PetRestaurant />} />
          <Route exact path='/recipe' element={<Recipe />} />
          <Route exact path='/hotel' element={<Hotel />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Main