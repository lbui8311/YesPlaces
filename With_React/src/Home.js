import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import Footer from './components/Footer'
import Users from './components/Users'
import About from './About'
import Profile from './Profile';
import AddUser from './components/AddUser';
import Main from './Main';
import { Container } from 'react-bootstrap';
import './home.css';
// import './custom.scss';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from '../node_modules/react-bootstrap/Form'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'


const Home = () => {
  const [users, setUsers] = useState([])

  //   useEffect(() => {
  //   const getUsers = async () => {
  //     const tasksFromServer = await fetchUsers()
  //     setUsers(tasksFromServer)
  //   }

  //   getUsers()
  // }, [])

  //   // Fetch Users
  // const fetchUsers = async () => {
  //   const res = await fetch('http://localhost:5000/users')
  //   const data = await res.json()

  //   return data
  // }

  // // Fetch User
  // const fetchUser = async (id) => {
  //   const res = await fetch(`http://localhost:5000/users/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  //  // Add User
  // const addUser = async (user) => {
  //   const res = await fetch('http://localhost:5000/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })

  //   const data = await res.json()

  //   setUsers([...users, data])
  // }

  return (
    <>
      {/* <Router> */}
      {/* <div class="test">
        <nav className ="bg-body-tertiary">
          <form class="container-fluid justify-content-end" style={{textAlign: 'end'}}>
            <button className="btn" style={{margin: 5}}>Username</button>
            <button className="btn2" style={{margin: 10, justifyContent: 'end'}}><a href="profile">Profile</a></button>
          </form>
          <form className="container-fluid" href="#" >
            <button className="btn0" style={{paddingTop:10}}> <span class="border-text">Yes!Places</span></button>
            <button className="btn1" style={{margin: 30}}>Home</button>
            <button className="btn2" style={{margin: 2}}>Restaurants</button>
            <button className="btn2" style={{margin: 2}}>Pet Restaurants</button>
            <button className="btn2" style={{margin: 2}}>Food Recipes</button>
            <button className="btn2" style={{margin: 2}}>Hotels</button>
            <button className="btn2" style={{margin: 2}}><a href="about">About</a></button>
          </form>
        </nav>
      </div> */}

      <Container style={{textAlign: 'center'}}>
      <label style={{fontSize: 20, color: 'white', fontStyle: 'italic', margin: 20}}>City<br/></label> 
      <label style={{fontSize: 15, color: 'white', margin: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br/> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br/> sunt in culpa qui officia deserunt mollit anim id est laborum.<br/></label>
      <label style={{fontSize: 20, color: 'white', margin: 20}}>-----------------------------------------------------------<br/></label> 
      <label 
        className="form-label"
        style={{fontSize: 25, backgroundColor: 'white', textAlign: 'center', fontFamily: 'Georgia', border: 'solid', borderWidth: 3}}
        >--------------Welcome Back!--------------
      </label>

      <form className='add-form'>
      <div className='form-control'>
        {/* <label>Task</label> */}
        <input
          type='text'
          placeholder='Username'
          style={{width: 200, height: 30, textAlign: 'center', margin: 20}}
          // value={username}
          // onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        {/* <label>Day & Time</label> */}
        <input
          type='text'
          placeholder='Password'
          style={{width: 200, height: 30, textAlign: 'center'}}
          // value={day}
          // onChange={(e) => setDay(e.target.value)}
        />
      </div>
      

      <input type='submit' value='Login!' className='btn' style={{width: 100, backgroundColor: 'white', margin: 20, textAlign: 'center',  border: 'solid', borderWidth: 3}} />
    </form>

    <label 
        className="form-label"
        style={{fontSize: 25, backgroundColor: 'white', textAlign: 'center', fontFamily: 'Georgia', border: 'solid', borderWidth: 3}}
        >--------New User Registration!--------
      </label>
  
      <form className='add-form'>
      <div className='form-control'>
        {/* <label>Task</label> */}
        <input
          type='text'
          placeholder='Username'
          style={{width: 200, height: 30, textAlign: 'center', margin: 20}}
          // value={username}
          // onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        {/* <label>Day & Time</label> */}
        <input
          type='text'
          placeholder='Password'
          style={{width: 200, height: 30, textAlign: 'center'}}
          // value={day}
          // onChange={(e) => setDay(e.target.value)}
        />
      </div>
      

      <input type='submit' value='Sign up!' className='btn' style={{width: 100, backgroundColor: 'white', margin: 20, textAlign: 'center',  border: 'solid', borderWidth: 3}} />
    </form>
        

      </Container>

        {/* <Routes>
          <Route/>  
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router> */}

      {/* <Container>
        <Row>
          <Col>
          <p className='City' style={{color: 'white', fontStyle: 'italic', paddingLeft: 75, paddingTop: 50, fontWeight: 'bold'}}>
            City
          </p>
          <p className='CityDescription' style={{color: 'white', fontStyle: 'italic', paddingLeft: 75, width: 500}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </Col >
          
          <Col>
            <Form.Control type="text" placeholder='Username' style ={{marginLeft: 500}}></Form.Control>
            <br />
            <Form.Control type="text" placeholder='Password'></Form.Control>
          </Col>


        </Row>
      </Container> */}

      {/* <div class="col">
            <text style="color: white; font-size: large;">-----------------------------------------------------------<br></text>
            <label for="inputPassword5" class="form-label" style="background-color: white; font-family: Georgia; width: 400px; font-size: 15pt; border: solid 3px; border-width: 3px;">New User Registration!</label>
            <input class="form-control" type="name" placeholder="Name" aria-label="default input example" style="width: 200px; text-align: center; margin-left: 185px;">
            <input class="form-control" type="hometown" placeholder="Home Town - Optional" aria-label="default input example" style="width: 200px; text-align: center; margin-left: 185px;">
            <input class="form-control" type="username" placeholder="Username" aria-label="default input example" style="width: 200px; text-align: center; margin-left: 185px;">
            <input class="form-control" type="password" placeholder="password" id="inputPassword5"  aria-labelledby="passwordHelpBlock" style="width: 200px; text-align: center; margin-left: 185px;">
            <div id="passwordHelpBlock" class="form-text" style="width: 200px; margin-left: 185px;">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
            <button class="btn btn-outline-dark m-2" style="width: 100px; border: solid 3px; background-color: white;" type="button">Sign up</button>
      </div> */}

    
    {/* <Router>
      <div className='container'>
        <Routes>
          <Route/>
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router> */}
    </>
  )
}

export default Home