import React from 'react';

const SongCard = ({ song }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <img src={song.album.images[0].url} alt={song.name} className="w-full h-auto mb-2" />
      <p className="text-lg font-bold">{song.name}</p>
      <p className="text-sm text-gray-500">{song.artists.map(artist => artist.name).join(', ')}</p>
      <a href={song.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Listen on Spotify</a>
    </div>
  );
};

export default SongCard;
