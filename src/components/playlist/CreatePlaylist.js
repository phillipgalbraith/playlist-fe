import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreatePlaylistForm from './CreatePlaylistForm'

export default function CreatePlaylist(props) {
  const { show, handleClose } = props;
  
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title> Generate a Playlist</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Select the song and associations</p>
      <CreatePlaylistForm />
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
