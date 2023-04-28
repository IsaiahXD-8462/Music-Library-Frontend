import SongDisplayTable from './Components/Song Display Table/SongDisplayTable';
import AddSongEntry from './Components/Add Song Entry/AddSongEntry';
import ImagePresenter from './Components/Image Presenter/ImagePresenter';
import rainbow_music from './assets/rainbow_music.gif'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    getAllSongs()
  }, []);

  async function getAllSongs() {
    axios.get('http://127.0.0.1:8000/api/music/')
    .then(response => {
      console.log(response.data);
      setSongs(response.data)})
    .catch(error => {
      console.log(error)
    });
  }

  async function getASong(pk) {
    axios.get(`http://127.0.0.1:8000/api/music/${pk}`)
    .then(response => {
      console.log(response.data);
      setSongs(response.data)})
    .catch(error => {
      console.log(error)
    });
  }
  
  async function addBrandNewSongs() {
    axios.post('http://127.0.0.1:8000/api/music/')
    .then(response => {
      console.log(response.data);
      setSongs(response.data)})
    .catch(error => {
      console.log(error)
    });
  }
  
  async function updateWholeSong(pk) {
    axios.put(`http://127.0.0.1:8000/api/music/${pk}`)
    .then(response => {
      console.log(response.data);
      setSongs(response.data)})
    .catch(error => {
      console.log(error)
    });
  }
  
  async function deleteSong(pk) {
    axios.delete(`http://127.0.0.1:8000/api/music/${pk}`)
    .then(() => {
      alert("Song deleted")
    .catch(error => {
      console.log(error) 
    });
    setSongs(null)
  }
  
  async function updatePartSong(pk) {
    axios.patch(`http://127.0.0.1:8000/api/music/${pk}`)
    .then(response => {
      console.log(response.data);
      setSongs(response.data)})
    .catch(error => {
      console.log(error)
    });
  }
  
  function addNewSongs(song){
    let tempSongs = [...songs, song];

    setSongs(tempSongs);
  }

  return (
    <div>
      Musical Search
      <ImagePresenter image = {rainbow_music} altText = "" />
      <SongDisplayTable parentSongs={songs} />
      <AddSongEntry addNewSongProperty={addNewSongs} />
      <button onClick={() => getAllSongs()}>Get All Songs</button>
    </div>
  );
}}

export default App;
