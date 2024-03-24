import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const SongRecomendation = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Función para generar colores aleatorios
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleSubmit = async () => {
    const newRecommendation = { name, description, link, color: getRandomColor() };
    const response = await fetch('/database.json');
    const data = await response.json();
    data.recommendations.push(newRecommendation);
    await fetch('/database.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setRecommendations([...recommendations, newRecommendation]);
    setName('');
    setDescription('');
    setLink('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/database.json');
      const data = await response.json();
      setRecommendations(data.recommendations);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex">
        <form
          className="w-1/3 p-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Description"
              className="w-full border border-gray-300 rounded-md p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Link"
              required
              className="w-full border border-gray-300 rounded-md p-2"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="w-2/3 p-4">
          <div className="bg-gray-200 h-full p-4 rounded-md overflow-y-scroll">
            <h2 className="text-lg font-semibold mb-2">Recommendation List</h2>
            <ul>
              {recommendations.map((recommendation, index) => (
                <li key={index}>
                  <div className="bg-white p-2 mb-2 rounded-md" style={{ backgroundColor: recommendation.color }}>
                    <p className="font-semibold">{recommendation.name}</p>
                    <p>{recommendation.description}</p>
                    <ReactPlayer
                      url={recommendation.link}
                      controls
                      width={'200px'}
                      height={'200px'}
                      className="mb-2"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongRecomendation;
