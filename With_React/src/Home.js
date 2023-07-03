import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import Footer from './components/Footer'
// import Users from './components/Users'
// import About from './About'
// import Profile from './Profile';
// import AddUser from './components/AddUser';
// import Main from './Main';
import { Container } from 'react-bootstrap';
import './home.css';
// import './custom.scss';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from '../node_modules/react-bootstrap/Form'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'
import axios from 'axios';

const UserLogin = () => {

  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPassowrdLogin] = useState('')

  // Submit Method
  const submit = async (e) => { // For logging in
    e.preventDefault();

    const userLogin = {
      usernameLogin: usernameLogin,
      passwordLogin: passwordLogin
    };

    // onAdd({usernameLogin, passwordLogin})

    // Post request
    const {dataLogin} = await axios.post('http://localhost:8000/token/',
    userLogin, {headers:
    {'Content-Type': 'application/json'},
    withCredentials: true});

    //Initialize the access & refresh token in localstorage.
    localStorage.clear();

    localStorage.setItem('access_token', dataLogin.access);
    localStorage.setItem('refresh_token', dataLogin.refresh);
    axios.defaults.headers.common['Authorization'] = `Bearer ${dataLogin['access']}`;
    window.location.href= '/';

    setUsernameLogin('')
    setPassowrdLogin('')
  }
  return (
    // Logging in form
      <form className='add-form' onSubmit={submit}> 
      <div className='form-control' style={{backgroundColor: 'transparent', borderWidth: 0, borderRadius: 50}}>
        <input
          type='text'
          placeholder='Username'
          style={{width: 200, textAlign: 'center'}}
          value={usernameLogin}
          onChange={(e) => setUsernameLogin(e.target.value)}
        />
      </div>
      <div className='form-control' style={{backgroundColor: 'transparent', borderWidth: 0, borderRadius: 50}}>
        <input
          type='password'
          placeholder='Password'
          style={{width: 200, textAlign: 'center'}}
          value={passwordLogin}
          onChange={(e) => setPassowrdLogin(e.target.value)}
        />
      </div>
      <input type='submit' value='Login!' className='btn' style={{width: 100, backgroundColor: 'white',  border: 'solid', borderWidth: 3}}/>
    </form>
  )
}

const AddUser = ({onAdd}) => {
  const [username, setUsername] = useState('')
  const [password, setPassowrd] = useState('')


  const onSubmit = (e) => { // For signing up
    e.preventDefault()

    if(!username) {
      alert('Please add a username and/or password')
    }

    onAdd({username, password})

    setUsername('')
    setPassowrd('')
  }

  return (
    // Signing up form
      <form className='add-form' onSubmit={onSubmit}> 
      <div className='form-control' style={{backgroundColor: 'transparent', borderWidth: 0, borderRadius: 50}}>
        <input
          type='text'
          placeholder='Username'
          style={{width: 200, textAlign: 'center'}}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-control' style={{backgroundColor: 'transparent', borderWidth: 0, borderRadius: 50}}>
        <input
          type='password'
          placeholder='Password'
          style={{width: 200, textAlign: 'center'}}
          value={password}
          onChange={(e) => setPassowrd(e.target.value)}
        />
      </div>
      <p style={{textAlign: 'center', backgroundColor: 'transparent'}}>Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</p>
      <input type='submit' value='Sign up!' className='btn' style={{width: 100, backgroundColor: 'white',  border: 'solid', borderWidth: 3}}/>
    </form>
  )
}


const Home = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState([]);

  //Login
  useEffect(() => {
    if(localStorage.getItem('access_token') === null){                   
        // window.location.href = '/home'
    }
    else{
     (async () => {
       try {
         const {dataLogin} = await axios.get(   
                        'http://localhost:8000/login/', {
                         headers: {
                            'Content-Type': 'application/json'
                         }}
                       );
         setMessage(dataLogin.message);
      } catch (e) {
        console.log('not auth')
      }
     })()};
  }, []);

  //Logout
  useEffect(() => {
    (async () => {
      try {
        const {dataLogin} = await  
              axios.post('http://localhost:8000/logout/',{
              refresh_token:localStorage.getItem('refresh_token')
              } ,{headers: {'Content-Type': 'application/json'}},  
              {withCredentials: true});
        localStorage.clear();
        axios.defaults.headers.common['Authorization'] = null;
        window.location.href = '/login'
        } catch (e) {
          console.log('logout not working', e)
        }
      })();
 }, []);

    useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

    // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/users/')
    const data = await res.json()

    return data
  }

  // Fetch User
  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}/`)
    const data = await res.json()

    return data
  }

   // Add User
  const addUser = async (user) => {
    const res = await fetch('http://localhost:8000/users/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    setUsers([...users, data])
  }

  return (
    <>
    <Container>
      <Row>
        <Col>
        <label className='City' style={{color: 'white', fontStyle: 'italic', paddingLeft: 75, paddingTop: 50, fontWeight: 'bold'}}>
            City
          </label>
          <p className='CityDescription' style={{color: 'white', fontStyle: 'italic', paddingLeft: 75, width: 500}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col style={{textAlign: 'center'}}>
        <label 
        className="form-label"
        style={{fontSize: 25, backgroundColor: 'white', fontFamily: 'Georgia', border: 'solid', borderWidth: 3, marginTop: 50, width: 500}}
        >Welcome Back!
      </label>
      {<UserLogin/>}
        </Col>
      </Row>
      <Row>
        <Col>{/*Nothing in here*/}</Col> 
        <Col style={{textAlign: 'center'}}>
        <label 
        className="form-label"
        style={{fontSize: 25, backgroundColor: 'white', fontFamily: 'Georgia', border: 'solid', borderWidth: 3, marginTop: 50, width: 500}}
        >New User Registration!
      </label>
      {<AddUser onAdd={addUser}/>}
        </Col>
      </Row>
    </Container>

    {/* <div style={{position: 'fixed', left: 0, right: 0, bottom: 100, fontSize: 10}}>
    <h2>Users Registration List:</h2>
      {users.map(user =>
        <div key={user.id} className='users_item'>
          <p>{user.username}</p>
          <p>{user.password}</p>
        </div>)}
        </div> */}

    <Footer/>
   </>
  )
}

export default Home