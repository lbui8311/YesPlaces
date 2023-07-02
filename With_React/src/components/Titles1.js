import React from 'react';
import Card from 'react-bootstrap/Card';
// import PropTypes from 'prop-types';
function Titles1({word,style}) {
  const cardStyle={
    border: 'solid 3px',
    maxWidth: 'auto',
    borderRadius: '10px',
    backgroundColor: '#ECE3F0',
    ...style,
  };
  return (
     <Card style={cardStyle}>
      <Card.Body>
        <Card.Text>
          {word}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Titles1;