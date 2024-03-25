import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

const TopTracksByCountry = () => {
  const [pais, setPais] = useState('');
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '76c15d5592msh7d1dbb73e2120e1p167086jsn626178b77f95',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };

  const fetcher = async (url) => {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };

  const { data, error, isLoading } = useSWR(
    pais ? `https://spotify81.p.rapidapi.com/top_200_tracks?country=${pais}` : null,
    fetcher
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("pais actual: ", pais);
    data.map((cancion) => {
      console.log("nombre: ", cancion.trackMetadata.trackName);
    })
  };

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto m-4">
        <form onSubmit={handleSearch} className="flex items-center justify-center mb-4">
          <select
            name="country"
            value={pais}
            onChange={e => setPais(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mr-2"
          >
            <option value="">Selecciona un país</option>
            <option value="AR">Argentina</option>
            <option value="US">Estados Unidos</option>
            <option value="UK">Reino Unido</option>
            <option value="BR">Brasil</option>
            <option value="CA">Canadá</option>
            <option value="FR">Francia</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            disabled={!pais}
          >
            Search
          </button>
        </form>
      </div>
      <div className="songs-section">
  {isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error: {error.message}</p>
  ) : data ? (
    <ul className=' grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {data.map((song) => (
        <li key={song.chartEntryData.currentRank} className="overflow-hidden rounded-md shadow-md hover:shadow-lg w-full h-auto transform transition-transform duration-300 hover:scale-110">
          <h2 className="text-lg font-bold mb-2">{song.chartEntryData.currentRank} - {song.trackMetadata.trackName}</h2>
          <Link to={song.trackMetadata.trackUri}>
            <img src={song.trackMetadata.displayImageUri} alt="top-track-image" />
          </Link>
        </li>
      ))}
    </ul>
  ) : null}
</div>

    </>
    
  );
};

export default TopTracksByCountry;
