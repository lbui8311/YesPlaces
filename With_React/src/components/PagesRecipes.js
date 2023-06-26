import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from 'react';

function PagesRecipes({ onAdd }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [location, setLocation] = useState('');
  const [petFriendly, setPetFriendly] = useState(false);




  const onSubmit = (e) => {
    e.preventDefault()

    if(!name) 
    {
      alert('Please add a name')
      return
    }

    onAdd({ name, ingredients, instructions, location, petFriendly })

    setName('')
    setIngredients('')
    setInstructions('')
    setLocation('')
    setPetFriendly(false)
  }
    return (
      <>
        <Form onSubmit={onSubmit}>
          <div className="row">
            <div className="col">
              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name of Recipe:</Form.Label>
                      <Form.Control type="Name of Recipe" placeholder="Name of Recipe" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                </Form>
              </div>

              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ingredients:</Form.Label>
                      <Form.Control type="Ingredients" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                    </Form.Group>
                </Form>
              </div>

              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Instructions:</Form.Label>
                      <Form.Control type="Instructions" placeholder="Steps" style={{height: 180,}} value={instructions} onChange={(e) => setInstructions(e.target.value)}/>
                    </Form.Group>
                </Form>
              </div>

              

            </div>

            <div className="col col-md-auto">
            <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Recipe Location:</Form.Label>
                      <Form.Control type="recipe-location" placeholder="Where it is sold" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </Form.Group>
                </Form>
              </div>

              <form>
                <label style={{marginRight: 20,}}>Pet Friendly</label>
                <input type="checkbox" checked={petFriendly} value={petFriendly} onChange={(e) => setPetFriendly(e.currentTarget.checked)}/>
              </form>

              <input type='submit' value="Add Recipe" className="btn-recipe"/>
            </div>
          </div>

          
        </Form>
      </>
    );
  }

export default PagesRecipes;