//Used ChatGPT and google

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

// import React from 'react';
// import { Form } from 'react-bootstrap';
// import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// const Star = ({ rating, onChange }) => {
//     const stars = [1, 2, 3, 4, 5];

//     return (
        
//     //      <div className="star-rating">
//     //   <span className="star-rating__title">Rating:</span>
//     //   {[1, 2, 3, 4, 5].map((star) => (
//     //     <label key={star} className="star-rating__star">
//     //       <input
//     //         type="radio"
//     //         name="rating"
//     //         value={star}
//     //         checked={rating === star}
//     //         onChange={() => onChange(star)}
//     //       />
//     //       <span className="star-rating__icon"></span>
//     //     </label>
//     //   ))}
//     // </div>

//     );
//   };

// export default Star;