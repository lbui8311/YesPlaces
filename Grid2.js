import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecInd.css';
import Card2 from './ComCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar2 from './Navbar2';
import Card1 from './Card1';
import dog from './download.jpg';
import taco from './taco.jpg';
import './Cook.jpg';
import profile from './picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
import Titles1 from './Titles1';
import MapCard from './MapCard';
import SearchBar from './Searchbar';


function Grid2() {
  return (
  <Container> 
  <Row>
      <Navbar2/>
  </Row>
  <div className='padding'>
  <Row> <Col><SearchBar label="Search for restaurants"/></Col>
  <Col><SearchBar label="Search by Location"/></Col>
  </Row>
  </div>
  <div className='padding'>
  <Row>
      <Col xs={4}><Titles1 word="Restaurants"/></Col>
      <Col xs={4}><Titles1 word="Rating"/></Col>
      <Col xs={4}><Titles1 word="Reviews"/></Col>
  </Row>
  </div>
  <Row>
        <Col xs={4}><Card1 name="Paw-Fil-A" photo= {dog} title={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "/></Col>
        <Col xs={4}><Card2 photo= {profile}/></Col>
        <Col xs={4}><MapCard/></Col>
  </Row>
  <Row>
        <Col xs={4}><Card1 name="Tacos el Gato" photo={taco} title={1} desc="This restaurant serves..."/></Col>
        <Col xs={4}><Card2 photo={profile}/></Col>
        <Col xs={4}><MapCard/></Col>
  </Row>
  </Container>
  );
}

export default Grid2;