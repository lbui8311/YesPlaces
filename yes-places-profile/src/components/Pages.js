import PagesButtons from "./PagesButtons";
import PagesPlaces from "./PagesPlaces";
import PagesName from "./PagesName";
import PagesRecipes from "./PagesRecipes";
import { useState } from 'react';

function Pages({ addPersonalInfo }) {
    return (
      
        <div className="row mt-2">
            <div className="col col-md-auto m-2"> 
                <div className="row button-page">
                    
                </div>
           </div>
           <div className="co; col-md-auto m-2"> 
                <div className="row place-page">
                    <PagesPlaces/>
                </div>
           </div>

           <div className="col col-md-auto ">
                <div className="row name-page mt-2">
                    <PagesName onAdd={addPersonalInfo} />
                </div>
                <div className="row recipe-page mt-1">
                    <PagesRecipes onAdd={addPersonalInfo}/>
                </div>
           </div>
        </div>
      
    );
  }
  
export default Pages;