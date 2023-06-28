// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Restaurant from './Restaurant'


const Main = () => {
  return (
    <div>
        <form className="Navbar" href="#" style={{backgroundColor: 'transparent', marginTop: 30}} >
          <button className="btn0" style={{paddingTop:10, backgroundColor: 'transparent'}}> <span class="border-text"><a href="/" style={{textDecoration: 'none', color: 'black'}}>Yes!Places</a></span></button>
          <button className="btn2" style={{margin: 2}}><a href="home" style={{textDecoration: 'none', color: 'black'}}>Home</a></button>
          <button className="btn2" style={{margin: 2}}><a href="restaurant" style={{textDecoration: 'none', color: 'black'}}>Restaurants</a></button>
          <button className="btn2" style={{margin: 2}}><a href="pet-restaurant" style={{textDecoration: 'none', color: 'black'}}>Pet Restaurants</a></button>
          <button className="btn2" style={{margin: 2}}><a href="recipe" style={{textDecoration: 'none', color: 'black'}}>Cooking Recipes</a></button>
          <button className="btn2" style={{margin: 2}}><a href="hotel" style={{textDecoration: 'none', color: 'black'}}>Hotels</a></button>
          <button className="btn2" style={{margin: 2}}><a href="about" style={{textDecoration: 'none', color: 'black'}}>About</a></button>
          <button className="btn2" style={{margin: 2}}><a href="profile" style={{textDecoration: 'none', color: 'black'}}>Profile</a></button>
        </form>

        <Router>
        <Routes>
          <Route exact path='/restaurant' element={<Restaurant />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Main