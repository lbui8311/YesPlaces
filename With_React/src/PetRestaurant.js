// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Background from './Background';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Navbar1 from './Navbar1';
import Card1 from './components/Card1';
import recipe from './empty-recipe.jpg';
import dog from './components/dog-rest1.jpg';
import taco from './components/res1.jpg';
// import './Grid1.css';
import PropTypes from 'prop-types'
import profile from './components/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
import Button1 from './components/Button1';
import Titles1 from './components/Titles1';
//import Logo from './Logo';
//import SearchBar from './Searchbar';
import React from 'react'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'
import Container from '../node_modules/react-bootstrap/Container'
// import recipe from './components/empty-recipe.jpg'
import Photo1 from './components/dog-rest1.jpg'



function PetRestaurant() {
  return (
    <>
    <Container style={{marginTop: 20}}> 
        {/* <Logo/> */}
        <div className='padding'>
      <Row>
          {/* <Navbar1/> */}
      </Row>
      </div>
      <Row></Row>
      <Row></Row>
      <Row> <Col>
      {/* <SearchBar label="Search for restaurants"/> */}
      </Col>
      <Col>
      {/* <SearchBar label="Search by Location"/> */}
      </Col>
      </Row>
      <div className='padding'>
      <Row>
          <Col><Titles1 word="Restaurants"/></Col>
          <Col><Titles1 word="Rating"/></Col>
          <Col><Titles1 word="Reviews"/></Col>
      </Row>
      </div>
      <Row>
            <Col xs={4}><Card1 name="Paw-Fil-A" photo= {dog} title={1} desc="This restaurant serves...                                                                                      "/></Col>
            <Col xs={4}><Card1 photo= {profile} desc="This place is the best" rev1={1}/></Col>
            <Col xs={4}>    <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5601165311286!2d-117.07398172400573!3d32.7774046736634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95686a6a04a21%3A0xc39f2ac6bf82f916!2sSan%20Diego%20State%20University!5e0!3m2!1sen!2sus!4v1687987885502!5m2!1sen!2sus" width="400" height="250" style={{border:0, borderRadius: 20}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </label></Col>
      </Row>
      <Row>
            <Col xs={4}><Card1 name="Tacos el Gato" photo={taco} title={1} desc="This restaurant serves..."/></Col>
            <Col xs={4}><Card1 photo={profile} desc="This place is the best" rev1={1}/></Col>
            <Col xs={4}>    <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5601165311286!2d-117.07398172400573!3d32.7774046736634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95686a6a04a21%3A0xc39f2ac6bf82f916!2sSan%20Diego%20State%20University!5e0!3m2!1sen!2sus!4v1687987885502!5m2!1sen!2sus" width="400" height="250" style={{border:0, borderRadius: 20}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </label></Col>
      </Row>
      </Container>

    </>
  )
}

export default PetRestaurant