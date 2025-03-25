import { fetchMusicData } from "../service/fetchData.js";
import React, {useState, useEffect} from "react";


export default function Card(){
  const [artists, setArtists] = useState([]);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetchMusicData().then(({ artistData, musicData }) => {
      setArtists(artistData);
      setMusic(musicData);
    });
  }, []);

  return (
    <div>
      <h2>Music Player</h2>

      {/* Display all artists */}
      <h3>Artists</h3>
      {artists.map((artist, index) => (
        <p key={index}>🎤 {artist.name}</p>
      ))}

      {/* Display all songs */}
      <h3>Music List</h3>
      {music.map((song, index) => (
        <div key={index}>
          <p>🎵 {song.title}</p>
          <audio controls src={song.audioPath}></audio>
        </div>
      ))}
    </div>
  );
}