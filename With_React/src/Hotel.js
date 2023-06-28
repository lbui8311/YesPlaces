import React from 'react'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'
import Container from '../node_modules/react-bootstrap/Container'
import recipe from './components/empty-recipe.jpg'


function Hotel() {
  return (
    <>
     
    <Container style={{marginTop: 50}}>
      <Row>
        <Col>
        <label style={{textAlign: 'center', backgroundColor: 'white', width: 400, height: 30, fontStyle: 'semibold', borderRadius: 20}}>Hotels</label>
        </Col>
        <Col>
        <label style={{textAlign: 'center', backgroundColor: 'white', width: 400, height: 30, fontStyle: 'semibold', borderRadius: 20 }}>Reviews</label>
        </Col>
        <Col>
        <label style={{textAlign: 'center', backgroundColor: 'white', width: 400, height: 30, fontStyle: 'semibold', borderRadius: 20 }}>Location</label>
        </Col>
      </Row>

      <Row>
      <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
        <img src={recipe} style={{width: 200, height: 125, marginRight: 20,padding: 10}}/>
          Hotel #1
          <p style={{padding: 10}}>Some information about this place</p>
          </label>
        </Col>
        <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
          <div className='form-control' style={{backgroundColor: 'transparent', borderWidth: 0, borderRadius: 50, marginTop: 200}}>
            <input
              type='text'
              placeholder='Add a Review'
              style={{width: 200, textAlign: 'center'}}
              // value={password}
              // onChange={(e) => setPassowrd(e.target.value)}
            />
            <input type='submit' value='Submit!' className='btn' style={{width: 100, backgroundColor: 'white',  border: 'solid', borderWidth: 3, height: 40, textAlign: 'center', marginLeft: 10}}/>
            </div>
        </label>
        </Col>
        <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5601165311286!2d-117.07398172400573!3d32.7774046736634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95686a6a04a21%3A0xc39f2ac6bf82f916!2sSan%20Diego%20State%20University!5e0!3m2!1sen!2sus!4v1687987885502!5m2!1sen!2sus" width="400" height="250" style={{border:0, borderRadius: 20}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" alt="A Map"></iframe>
        </label>
      </Col>
      </Row>

      <Row>
      <Col>
      <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
        <img src={recipe} style={{width: 200, height: 125, marginRight: 20,padding: 10}}/>
          Hotel #2
          <p style={{padding: 10}}>Some information about this place</p>
          </label>        
          </Col>

        <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
          <div className='form-control' style={{backgroundColor: 'transparent', borderWidth: 0, borderRadius: 50, marginTop: 200}}>
            <input
              type='text'
              placeholder='Add a Review'
              style={{width: 200, textAlign: 'center'}}
              // value={password}
              // onChange={(e) => setPassowrd(e.target.value)}
            />
            <input type='submit' value='Submit!' className='btn' style={{width: 100, backgroundColor: 'white',  border: 'solid', borderWidth: 3, height: 40, textAlign: 'center', marginLeft: 10}}/>
            </div>
        </label>

        </Col>

        <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 400, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5601165311286!2d-117.07398172400573!3d32.7774046736634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95686a6a04a21%3A0xc39f2ac6bf82f916!2sSan%20Diego%20State%20University!5e0!3m2!1sen!2sus!4v1687987885502!5m2!1sen!2sus" width="400" height="250" style={{border:0, borderRadius: 20}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </label>

        </Col>


      </Row>
    </Container>

    </>
  )
}

export default Hotel