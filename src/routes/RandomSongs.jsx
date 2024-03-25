import React, { useState, useEffect } from 'react';

const RandomSongs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=rock';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '76c15d5592msh7d1dbb73e2120e1p167086jsn626178b77f95',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setSongs(data.tracks);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Random Songs</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {songs.map((song, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <img src={song.album.images[0].url} alt={song.name} className="w-full h-auto mb-2" />
            <p className="text-lg font-bold">{song.name}</p>
            <p className="text-sm text-gray-500">{song.artists.map(artist => artist.name).join(', ')}</p>
            <a href={song.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Listen on Spotify</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomSongs;
