//import logo from './logo.svg';
//import './App.css';
import { Container } from 'react-bootstrap';
import './home.css'
//import './custom.scss'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
    <div class="test">
    <nav className ="bg-body-tertiary">
      <form class="container-fluid justify-content-end">
        <button className="btn" style={{margin: 5}}>Username</button>
        <button className="btn2" style={{margin: 10}}>Profile</button>
      </form>
      <form className="container-fluid" href="#" >
        <button className="btn0" style={{paddingTop:10}}> <span class="border-text">Yes!Places</span></button>
        <button className="btn1" style={{margin: 30}}>Home</button>
        <button className="btn2" style={{margin: 2}}>Restaurants</button>
        <button className="btn2" style={{margin: 2}}>Pet Restaurants</button>
        <button className="btn2" style={{margin: 2}}>Food Recipes</button>
        <button className="btn2" style={{margin: 2}}>Hotels</button>
        <button className="btn2" style={{margin: 2}}><a href="about.js">About</a></button>

      </form>
      </nav>

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
{/* 
      <div class="col">
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

      <footer>
        <p style={{paddingTop: 550}}>Credit: <a href="https://www.freepik.com/free-photo/beach-chair_1114661.htm#from_view=detail_alsolike">Image by mrsiraphol</a> on Freepik</p>
      </footer>


    </div>

    <div>

    </div>

    </>
  );
}

export default Home;
