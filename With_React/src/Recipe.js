import React from 'react'
import Row from '../node_modules/react-bootstrap/Row'
import Col from '../node_modules/react-bootstrap/Col'
import Container from '../node_modules/react-bootstrap/Container'
import recipe from './components/empty-recipe.jpg'
import recipe1 from './components/recipe1.jpg'
import recipe2 from './components/recipe2.jpg'


function Recipe() {
  return (
    <>
     
    <Container style={{marginTop: 50}}>
      <Row>
        <Col>
        <label style={{textAlign: 'center', backgroundColor: 'white', width: 700, height: 30, fontStyle: 'semibold', borderRadius: 20}}>Cooking Recipes</label>
        </Col>
        <Col>
        <label style={{textAlign: 'center', backgroundColor: 'white', width: 500, height: 30, fontStyle: 'semibold', borderRadius: 20 }}>Reviews</label>
        </Col>
      </Row>

      <Row>
      <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 700, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
          <img src={recipe1} style={{width: 300, height: 225, marginRight: 20,padding: 10}}/>
          Recipe #1 with some cooking instructions
          {/* <p style={{padding: 10}}>Some cooking instructions</p> */}
          </label>
        </Col>
        <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 500, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
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
      </Row>

      <Row>
      <Col>
      <label style={{textAlign: 'left', backgroundColor: 'white', width: 700, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
        <img src={recipe2} style={{width: 300, height: 225, marginRight: 20,padding: 10}}/>
          Recipe #2 with some cooking instructions
          {/* <p style={{padding: 10}}>Some cooking instructions</p> */}
          </label>        
          </Col>

        <Col>
        <label style={{textAlign: 'left', backgroundColor: 'white', width: 500, height: 250, fontStyle: 'semibold', marginTop: 30, borderRadius: 20}}>
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


      </Row>
    </Container>

    </>
  )
}

export default Recipe