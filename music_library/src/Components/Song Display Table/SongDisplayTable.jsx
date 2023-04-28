
const SongDisplayTable = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
            {props.parentSongs.map((entry, index) => {
            return (
                <tr>
                    <td>{index + 1}</td> 
                    <td>{entry.song}</td>
                    <td>{entry.artist}</td>
                    <td>{entry.album}</td>
                    <td>{entry.release_date}</td>
                    <td>{entry.genre}</td>
                    <td>{entry.likes}</td>
                    <td><button onClick={() => props.updatePartSong()}>Like</button></td>
                    <td><button onClick={() => props.updateWholeSong()}>Edit</button></td>
                    <td><button onClick={() => props.deleteSong()}>Delete</button></td>
                </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default SongDisplayTable;