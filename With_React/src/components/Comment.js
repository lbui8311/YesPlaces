// used chatgpt for some of this
import './Petind.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Star from './Stars';
import { Form, Button } from 'react-bootstrap';
const Comment = () => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // For example, you can send the comment to a backend API
    console.log('Review submitted:', comment);
    setComment('');
  };

  return (
    <Container>
      
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="comment">
        <Form.Label>Leave a Review:</Form.Label>
        <Star rating={rating} onChange={handleRatingChange} />
        <Form.Control
          as="textarea"
          rows={1}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Button className="btn-primary" type="submit">Submit</Button>
    </Form>
    </Container>
  );
};

export default Comment;
