import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddAssociationForm from './AddAssociationForm';

export default function AddAssociation(props) {
  const { show, handleClose} = props;
 
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title> Add Association</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Select the song and associations</p>
      <AddAssociationForm />
    </Modal.Body>
    
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
