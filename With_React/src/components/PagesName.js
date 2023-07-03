import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';



function PagesName({ onAdd }) {
  const [profileName, setProfileName] = useState('');
  const [profileCity, setProfileCity] = useState('');
  const [profilePetName, setProfilePetName] = useState('');



  const onSubmit = (e) => {
    e.preventDefault()

    if(!profileName) 
    {
      alert('Please add a name')
      return
    }

    onAdd({ profileName, profileCity, profilePetName })

    setProfileName('')
    setProfileCity('')
    setProfilePetName('')
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
                      <Form.Control type="profileName" placeholder="Display Name" value={profileName} onChange={(e) => setProfileName(e.target.value)}/>
                    </Form.Group>
                </Form>
              </div>

              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Location:</Form.Label>
                      <Form.Control type="city" placeholder="Name of your City" value={profileCity} onChange={(e) => setProfileCity(e.target.value)}/>
                    </Form.Group>
                </Form>
              </div>
            </div>
          
            <div className="col">
              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Pet Name:</Form.Label>
                      <Form.Control type="pet" placeholder="Name of pet" value={profilePetName} onChange={(e) => setProfilePetName(e.target.value)}/>
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