import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from 'react';
import shop from './shop.jpg'


function PagesPlaces({ onAdd }) {
  const [place, setPlace] = useState('');
  const [street, setStreet] = useState('');
  const [cityAddress, setCityAddress] = useState('');
  const [country, setCountry] = useState('');
  const [placeType, setPlaceType] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');



  const onSubmit = (e) => {
    e.preventDefault()

    if(!place && !street && !cityAddress) 
    {
      alert('Please add a name and full address')
      return
    }

    

    onAdd({ place, street, cityAddress, country, placeType, description, link })

    setPlace('')
    setStreet('')
    setCityAddress('')
    setCountry('')
    setPlaceType('')
    setDescription('')
    setLink('')
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
                <Form.Control type="Name of Place" placeholder="Name of Place" value={place} onChange={(e) => setPlace(e.target.value)}/>
              </Form.Group>
            </Form>

            <Form style={{width: 320,}}>
              <Form.Group className="mb-3">
                <Form.Label>Street Address:</Form.Label>
                <Form.Control type="Street Address" placeholder="Street Address" value={street} onChange={(e) => setStreet(e.target.value)}/>
              </Form.Group>
            </Form>

            <Form style={{width: 320,}}>
              <Form.Group className="mb-3">
                <Form.Label>City:</Form.Label>
                <Form.Control type="CityAddress" placeholder="City Address" value={cityAddress} onChange={(e) => setCityAddress(e.target.value)}/>
              </Form.Group>
            </Form>

            <Form style={{width: 320,}}>
              <Form.Group className="mb-3">
                <Form.Label>Country:</Form.Label>
                <Form.Control type="Country" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
              </Form.Group>
            </Form>

            
            
          
            </div>
      
            <div className="col">
              <Form style={{width: 320,}}>
                  <Form.Group className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="Description" placeholder="Description" style={{height: 125,}} value={description} onChange={(e) => setDescription(e.target.value)}/>
                  </Form.Group>
              </Form>


              <Form style={{width: 320,}}>
                  <Form.Group className="mb-3">
                    <Form.Label>Link:</Form.Label>
                    <Form.Control type="link" placeholder="Link to website" value={link} onChange={(e) => setLink(e.target.value)}/>
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