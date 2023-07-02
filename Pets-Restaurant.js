import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card2 from '../components/ComCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar1 from '../components/Navbar1';
import Card1 from '../components/Card1pet';
import '../components/Petind.css'
import taco from '../components/taco.jpg';
import fries from '../components/download.jpg';
import profile from '../components/ProfilePic.jpg'

import Titles1 from '../components/Titles1';
import MapCard from '../components/MapCard';
import SearchBar from '../components/Searchbar';






function Grid1() {
  return (
    <div className='Pet'>
  <Container > 
  <Row>
      <Navbar1/>
  </Row>
  <div className='padding'>
  <Row> <Col><SearchBar label="Search for restaurants"/></Col>
  <Col><SearchBar label="Search by Location"/></Col>
  </Row>
  </div>
  <div className='padding'>
  <Row>
      <Col xs={4}><Titles1 word="Restaurants"/></Col>
      <Col xs={4}><Titles1 word="Reviews"/></Col>
      <Col xs={4}><Titles1 word="Location"/></Col>
  </Row>
  </div>
  <Row>
        <Col xs={4}><Card1 name="Paw-Fil-A" photo= {fries} title={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "/></Col>
        <Col xs={4}><Card2 photo= {profile}/></Col>
        <Col xs={4}><MapCard/></Col>
  </Row>
  <Row>
        <Col xs={4}><Card1 name="Tacos el Gato" photo={taco} title={1} desc="This restaurant serves..."/></Col>
        <Col xs={4}><Card2 photo={profile}/></Col>
        <Col xs={4}><MapCard/></Col>
  </Row>
  </Container>
  </div>
  );
}

export default Grid1;