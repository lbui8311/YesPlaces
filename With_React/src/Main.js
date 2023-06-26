// import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import About from './About'
import Profile from './Profile'


const Main = () => {
  return (
    <div>
        {/* <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link> */}
        <div class="test">
        <nav className ="bg-body-tertiary">
          <form className="container-fluid" href="#" >
            <button className="btn0" style={{paddingTop:10}}> <span class="border-text">Yes!Places</span></button>
            <button className="btn2" style={{margin: 2}}><a href="home">Home</a></button>
            <button className="btn2" style={{margin: 2}}><a href="about">About</a></button>
            <button className="btn2" style={{margin: 2}}><a href="profile">Profile</a></button>
          </form>
        </nav>
      </div>



        <Router>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>

    </div>
  )
}

export default Main