import React from 'react';

const Radio = ({placeType, handleChange}) => {
    return (
        <div>
          <label>
            <input type="radio" value="option1" checked={placeType === 'restaurant'} onChange={handleChange} />
            Restaurant
          </label>
          <br />
          <label>
            <input type="radio" value="option2" checked={placeType === 'pet-restaurant'} onChange={handleChange} />
            Pet Restaurant
          </label>
          <br />
          <label>
            <input type="radio" value="option3" checked={placeType === 'hotel'} onChange={handleChange} />
            Hotel
          </label>
        </div>
      );
};

export default Radio;