import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from 'react';
import shop from './shop.jpg'


function PagesPlaces({ onAdd }) {
  const [placeName, setPlaceName] = useState('');
  const [placeAddress, setPlaceAddress] = useState('');
  const [placeCity, setPlaceCity] = useState('');
  const [placeCountry, setPlaceCountry] = useState('');
  const [placeType, setPlaceType] = useState('');
  const [placeDescription, setPlaceDescription] = useState('');
  const [placeLink, setPlaceLink] = useState('');



  const onSubmit = (e) => {
    e.preventDefault()

    if(!placeName && !placeAddress && !placeCity) 
    {
      alert('Please add a name and full address')
      return
    }

    

    onAdd({ placeName, placeAddress, placeCity, placeCountry, placeType, placeDescription, placeLink })

    setPlaceName('')
    setPlaceAddress('')
    setPlaceCity('')
    setPlaceCountry('')
    setPlaceType('')
    setPlaceDescription('')
    setPlaceLink('')
  }


    return (
      <>
        <Form onSubmit={onSubmit}>
          <div className="row">
            <div className="col">
            <Form style={{width: 320,}}>
              <label>Picture of the Place:</label>
            <img src={shop} style={{width: 200, height: 125, marginRight: 20,}}/>

              <Form.Group className="mb-3">
                <Form.Label>Add a Place:</Form.Label>
                <Form.Control type="Name of Place" placeholder="Name of Place" value={placeName} onChange={(e) => setPlaceName(e.target.value)}/>
              </Form.Group>
            </Form>

            <Form style={{width: 320,}}>
              <Form.Group className="mb-3">
                <Form.Label>Street Address:</Form.Label>
                <Form.Control type="Street Address" placeholder="Street Address" value={placeAddress} onChange={(e) => setPlaceAddress(e.target.value)}/>
              </Form.Group>
            </Form>

            <Form style={{width: 320,}}>
              <Form.Group className="mb-3">
                <Form.Label>City:</Form.Label>
                <Form.Control type="CityAddress" placeholder="City Address" value={placeCity} onChange={(e) => setPlaceCity(e.target.value)}/>
              </Form.Group>
            </Form>

            <Form style={{width: 320,}}>
              <Form.Group className="mb-3">
                <Form.Label>Country:</Form.Label>
                <Form.Control type="Country" placeholder="Country" value={placeCountry} onChange={(e) => setPlaceCountry(e.target.value)} />
              </Form.Group>
            </Form>

            
            
          
            </div>
      
            <div className="col">
              <Form style={{width: 320,}}>
                  <Form.Group className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="Description" placeholder="Description" style={{height: 125,}} value={placeDescription} onChange={(e) => setPlaceDescription(e.target.value)}/>
                  </Form.Group>
              </Form>


              <Form style={{width: 320,}}>
                  <Form.Group className="mb-3">
                    <Form.Label>Link:</Form.Label>
                    <Form.Control type="link" placeholder="Link to website" value={placeLink} onChange={(e) => setPlaceLink(e.target.value)}/>
                  </Form.Group>
              </Form>
              
              <Form style={{width: 320,}}>
                  <Form.Group className="mb-3">
                    <Form.Label>Restaurant, Pet Restaurant, or Hotel?:</Form.Label>
                    <Form.Control type="placeType" placeholder="Enter type" value={placeType} onChange={(e) => setPlaceType(e.target.value)}/>
                  </Form.Group>
              </Form>
              <input type='submit' value="Add Place Info" className="btn-add"
              style={{width: 320, border: '3px solid black', borderRadius: '5px', backgroundColor: '#A8CFFF'}}/>

              </div>
          </div>
        </Form>
      </>
    );
  }
  
export default PagesPlaces;