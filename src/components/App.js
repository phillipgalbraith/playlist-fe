import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import AddAssociation from './association/AddAssociation';
import CreatePlaylist from './playlist/CreatePlaylist'

function App() {
  const [showPlaylist, setShowPlaylist] = useState(false)
  const [showAssociation, setShowAssociation] = useState(false)

  const handleCloseAssociation = () => {
    setShowAssociation(false);
  };
  const handleClosePlaylist = () => {
    setShowPlaylist(false);
  };
  const handleShowAssociation = (e) => {  
    setShowAssociation(true);
  }
  
  const handleShowPlaylist = (e) => {  
    setShowPlaylist(true);
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>
                🎧 Listen Vibe
            </h1>
            <p>
              Listen Vibe is the place to create meaningful playlists.
            </p>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <Button id="playlist" onClick={handleShowPlaylist}>
                  ➕Create Playlist
                </Button>
                <p> Create a playlist based on your routine, contacts, or vibe. </p>
              </div>  
              <div className='col'>
                <Button id="association" onClick={handleShowAssociation}>
                  ➕Add Association
                </Button>
                <p> Associate songs with events, places, contacts, or vibes. </p>
              </div>  
            </div>
          </div>
          </header>
      </div>
      <AddAssociation show={showAssociation} handleClose={handleCloseAssociation}/>

     <CreatePlaylist show={showPlaylist} handleClose={handleClosePlaylist}/>
    </>
  );
}

export default App;
