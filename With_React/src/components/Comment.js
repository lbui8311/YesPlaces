// used chatgpt for this
import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';
const Comment = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // For example, you can send the comment to a backend API
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="comment">
        <Form.Label>Leave a comment:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Comment;
