import Form from 'react-bootstrap/Form';
import React from 'react';
import shop from './shop.jpg';

function PagesPlaces() {
    return (
      <>
        <div className="col">
          <Form style={{width: 320,}}>
            <Form.Group className="mb-3">
              <Form.Label>Add a Place:</Form.Label>
              <Form.Control type="Name of Place" placeholder="Name of Place" />
            </Form.Group>
          </Form>

          <Form style={{width: 320,}}>
            <Form.Group className="mb-3">
              <Form.Label>Street Address:</Form.Label>
              <Form.Control type="Street Address" placeholder="Street Address" />
            </Form.Group>
          </Form>

          <Form style={{width: 320,}}>
            <Form.Group className="mb-3">
              <Form.Label>City:</Form.Label>
              <Form.Control type="City" placeholder="City" />
            </Form.Group>
          </Form>

          <Form style={{width: 320,}}>
            <Form.Group className="mb-3">
              <Form.Label>Country:</Form.Label>
              <Form.Control type="Country" placeholder="Country" />
            </Form.Group>
          </Form>

          
          <Form style={{width: 320,}}>
              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="Description" placeholder="Description" style={{height: 150,}} />
              </Form.Group>
          </Form>
        
        </div>
    
        <div className="col">
          <p>Pictures of Place:</p>
          <img src={shop} alt="shop" style={{width: 300, height: 200,}}/>

        
          <button className="btn-add-pic mb-4"> Add Photos </button>
          

          <p>Select a Place:</p>
           <form>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
              <label htmlFor="Restaurant">Restaurant</label><br/>
              <input type="radio" id="css" name="fav_language" value="CSS"/>
              <label htmlFor="css">Pet Restaurant</label><br/>
              <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
              <label htmlFor="Pet Restaurant">Hotel</label>
          </form> 
       </div>
      </>
    );
  }
  
export default PagesPlaces;