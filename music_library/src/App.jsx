import React, { useState } from 'react';
import SongDisplayTable from './Components/Song Display Table/SongDisplayTable';
import AddSongEntry from './Components/Add Song Entry/AddSongEntry';
import ImagePresenter from './Components/Image Presenter/ImagePresenter';
import 

function App() {

  const [songs, setSongs] = useState([{song: '', artist: '', album: '', release_date: '', genre: '', likes: 0}])
  
  return (
    <div>
      <ImagePresenter image {rainbow_music}
      <SongDisplayTable parentSongs={songs} />
      <AddSongEntry addNewSongProperty={newSong} />
    </div>
  );
}

export default App;
