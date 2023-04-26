import React, { useState } from 'react';
import SongDisplayTable from './Components/Song Display Table/SongDisplayTable';


function App() {

  const [songs, setSongs] = useState([{song: '', artist: '', album: '', release_date: '', genre: '', likes: 0}])
  
  return (
    <div>
      <SongDisplayTable parentSongs={songs} />
    </div>
  );
}

export default App;
