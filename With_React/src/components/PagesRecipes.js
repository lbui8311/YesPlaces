import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from 'react';
import recipe from './empty-recipe.jpg'

function PagesRecipes({ onAdd }) {
  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');
  const [recipeLocation, setRecipeLocation] = useState('');
  const [recipePetFriendly, setRecipePetFriendly] = useState(false);




  const onSubmit = (e) => {
    e.preventDefault()

    if(!recipeName) 
    {
      alert('Please add a recipe name')
      return
    }

    onAdd({ recipeName, recipeIngredients, recipeInstructions, recipeLocation, recipePetFriendly })

    setRecipeName('')
    setRecipeIngredients('')
    setRecipeInstructions('')
    setRecipeLocation('')
    setRecipePetFriendly(false)
  }
    return (
      <>
        <Form onSubmit={onSubmit}>
          <div className="row">
            <div className="col">
              <div className="row">
                <Form style={{width: 320,}}>
                  <label>Sample of Food Picture:</label>
                <img src={recipe} style={{width: 250, height: 125, marginRight: 20,}} alt='recipe'/>

                    <Form.Group className="mb-3">
                      <Form.Label>Name of Recipe:</Form.Label>
                      <Form.Control type="Name of Recipe" placeholder="Name of Recipe" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                    </Form.Group>
                </Form>
              </div>

              <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Ingredients:</Form.Label>
                      <Form.Control type="Ingredients" placeholder="Ingredients" value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)} />
                    </Form.Group>
                </Form>
              </div>
            </div>
            
            <div className="col col-md-auto">
            <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Instructions:</Form.Label>
                      <Form.Control type="Instructions" placeholder="Steps" style={{height: 180,}} value={recipeInstructions} onChange={(e) => setRecipeInstructions(e.target.value)}/>
                    </Form.Group>
                </Form>
              </div>
            <div className="row">
                <Form style={{width: 320,}}>
                    <Form.Group className="mb-3">
                      <Form.Label>Recipe Location:</Form.Label>
                      <Form.Control type="recipe-location" placeholder="Where it is sold" value={recipeLocation} onChange={(e) => setRecipeLocation(e.target.value)} />
                    </Form.Group>
                </Form>
              </div>

              <form>
                  <input type="radio" id="pet-friendly" name="pet-freindly" value={recipePetFriendly} onChange={(e) => setRecipePetFriendly(e.target.value)}/>
                  <label htmlFor="Restaurant" style={{marginBottom: 10}}>Pet-friendly</label><br/>
              </form>
              <input type='submit' value="Add Recipe" className="btn-recipe"
              style={{width: 295, border: '3px solid black', borderRadius: '5px', backgroundColor: '#A8CFFF'}}/>
            </div>
          </div>

          
        </Form>
      </>
    );
  }

export default PagesRecipes;