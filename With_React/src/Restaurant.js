import React from 'react'

function Restaurant() {
  return (
    <>
       <div className="card-header" style= {{border: 3, borderRadius: 10, backgroundColor: '#C4EBFF'}}>
                Restaurants
       </div>

       <div className="card text-white bg-primary">
            <div className="card-body" style= {{height: 21, border: 3, borderRadius: 10, backgroundColor: "#C4EBFF"}}>
              {/* <img src="empty-recipe.jpg" class="card-img-left"  style="width: 18rem;">  */}
              {/* <img src={url(/components/empty-recipe.jpg)} alt="plate" /> */}
              <h5 className="card-title-right" style={{color: "black"}}>Primary card title</h5>
              <p classname="card-text" style={{color: "black"}}>Some quick example text tocontent.</p>
            </div>
        </div>
    </>
  )
}

export default Restaurant