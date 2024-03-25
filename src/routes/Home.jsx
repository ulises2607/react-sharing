import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to SoundVoyage</h1>

        <section className="mb-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Recommend Song</h2>
          <p className="mb-4">Get personalized song recommendations based on your preferences.</p>
          <Link to="/recommendation" className="text-blue-500 hover:underline">Recommend Song</Link>
        </section>

        <section className="mb-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Top Track by Country</h2>
          <p className="mb-4">Explore top tracks in different countries.</p>
          <Link to="/top-track-by-country" className="text-blue-500 hover:underline">Top Track by Country</Link>
        </section>

        <section className="mb-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Random Song</h2>
          <p className="mb-4">Discover random songs from our vast music library.</p>
          <Link to="/random-song" className="text-blue-500 hover:underline">Random Song</Link>
        </section>
      </div>
    </div>
  );

}

export default Home