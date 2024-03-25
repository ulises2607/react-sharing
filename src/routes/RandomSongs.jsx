import React from 'react';
import useSWR from 'swr';
import SongCard from '../components/SongCard';

const RandomSongs = () => {
  const fetcher = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '76c15d5592msh7d1dbb73e2120e1p167086jsn626178b77f95',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    });
    const data = await response.json();
    return data.tracks;
  };

  const { data: songs, error } = useSWR(
    'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=rock',
    fetcher
  );

  if (error) return <div>Error to load data!</div>;
  if (!songs) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Random Songs</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default RandomSongs;
