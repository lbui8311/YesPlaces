import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card2 from '../components/ComCardrec'
import Navbar2 from '../components/Navbar2';
import Card1 from '../components/Card1rec';
import Titles1rec from '../components/Titles1rec';
import SearchBar from '../components/Searchbar';

import rec1 from '../components/rec1.jpg';
import rec2 from '../components/rec2.jpg';
import profile from '../components/ProfilePic.jpg';



function Grid2() {
  return (
    <div className='Rec'>
  <Container> 
  <Row>
      <Navbar2/>
  </Row>
  <div className='padding'>
  <Row> <Col><SearchBar label="Search for Recipes"/></Col>
  <Col><SearchBar label="Search by Country"/></Col>
  </Row>
  </div>
  <div className='padding'>
  <Row>
      <Col xs={6}><Titles1rec word="Recipes"/></Col>
      <Col xs={6}><Titles1rec word="Reviews"/></Col>
  </Row>
  </div>
  <Row>
        <Col xs={6}><Card1 name="Orange Chicken" photo= {rec1} title={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "/></Col>
        <Col xs={6}><Card2 photo= {profile}/></Col>
  </Row>
  <Row>
        <Col xs={6}><Card1 name="IMPasta" photo={rec2} title={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "/></Col>
        <Col xs={6}><Card2 photo={profile}/></Col>
  </Row>
  </Container>
  </div>
  );
}

export default Grid2;