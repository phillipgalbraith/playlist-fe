import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddAssociationForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formEnterSongTitle">
        <Form.Label>Song</Form.Label>
        <Form.Control placeholder="Enter association" />
        <Form.Text className="text-muted">
          enter an event 
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEnterSongTitle">
        <Form.Label>Association</Form.Label>
        <Form.Control placeholder="Enter association" />
        <Form.Text className="text-muted">
          enter an event associated
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
  )
}
