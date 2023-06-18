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
      <form className="container-fluid justify-content-end" href="#" >
        <button className="btn0"> <span class="border-text">Yes!Places</span></button>
        <button className="btn1" style={{margin: 20}}>Home</button>
        <button className="btn2">Restaurants</button>
        <button className="btn2">Pet Restaurants</button>
        <button className="btn2">Food Recipes</button>
        <button className="btn2">Hotels</button>
        <button className="btn2">About</button>
          </form>
      </nav>

      <Container>
        <Row>
          <Col>
          <p className='City' style={{color: 'white', fontStyle: 'italic', paddingLeft: 75, paddingTop: 50, fontWeight: 'bold'}}>
            City
          </p>
          </Col >
          <Col  xs={6}>
            <Form.Control type="text" placeholder='Username'></Form.Control>
            <br />
            <Form.Control type="text" placeholder='Password'></Form.Control>
          </Col>


        </Row>
      </Container>



      
      <p className='CityDescription' style={{color: 'white', fontStyle: 'italic', paddingLeft: 75, width: 500}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>



    </div>

    <div>

    </div>

    </>
  );
}

export default Home;
