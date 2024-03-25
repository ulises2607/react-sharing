import React, { useState } from 'react'

const TopTracksByCountry = () => {
  const [canciones, setCanciones] = useState('');
  const [pais, setPais] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    console.log(pais);
    getCanciones(pais)
  }




  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '76c15d5592msh7d1dbb73e2120e1p167086jsn626178b77f95',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };

  async function getCanciones (pais) {
    try{
     let url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=${pais}`;
     let data = await fetch(url, options)
     let res = await data.json()
     console.log(res);

    } catch (error) {
      console.log(`ups... there is an error: ${error}`);
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <select
        name="country"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mr-2"
      >
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
      >
        Submit
      </button>
    </form>
  );
}

export default TopTracksByCountry