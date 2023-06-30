import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';



function PagesName({ onAdd }) {
  const [userName, setUserName] = useState('');
  const [city, setCity] = useState('');
  const [pet, setPet] = useState('');



  const onSubmit = (e) => {
    e.preventDefault()

    if(!userName) 
    {
      alert('Please add a name')
      return
    }

    onAdd({ userName, city, pet })

    setUserName('')
    setCity('')
    setPet('')
  }


    return (
      <>
        <Form onSubmit={onSubmit}>
          <div className="row">
            <div className="col">
              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Change Display Name:</Form.Label>
                      <Form.Control type="userName" placeholder="Display Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </Form.Group>
                </Form>
              </div>

              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Location:</Form.Label>
                      <Form.Control type="city" placeholder="Name of your City" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </Form.Group>
                </Form>
              </div>
            </div>
          
            <div className="col">
              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Pet Name:</Form.Label>
                      <Form.Control type="pet" placeholder="Name of pet" value={pet} onChange={(e) => setPet(e.target.value)}/>
                    </Form.Group>
                </Form>
              </div>
            </div>
          </div>

          <input type='submit' value="Add Profile Info" className="btn-add-prof-pic"
          style={{width: 320, border: '3px solid black', borderRadius: '5px', backgroundColor: '#A8CFFF'}}/>
        </Form>
      </>
    );
  }
  
export default PagesName;
