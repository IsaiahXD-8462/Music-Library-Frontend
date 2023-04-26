import React, { useState } from 'react';

const addSongEntry = (props) => {
    
    const [song, makeSong] = useState('');
    const [artist, makeArtist] = useState('');
    const [album, makeAlbum] = useState('');
    const [date, setDate] = useState('');
    const [genre, makeGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            song: song,
            artist: artist,
            album: album,
            date: date,
            genre: genre
        };
        console.log(newSong);
        props.addNewSongProperty(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song</label>
            <input type='text' value={song} onChange={(event) => makeSong(event.target.value)} />
            <label>Artist</label>
            <input type='text' value={artist} onChange={(event) => makeArtist(event.target.value)} />
            <label>Album</label>
            <input type='text' value={album} onChange={(event) => makeAlbum(event.target.value)} />
            <label>Release Date</label> 
            <input type='date' value={date}onChange={(event) => setDate(event.target.value)} />
            <label>Genre</label>
            <input type='text' value={genre} onChange={(event) => makeGenre(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>
     );
}

export default addSongEntry;