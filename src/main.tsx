import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Home from './routes/Home';
import SongRecommendation from './routes/SongRecommendation';
import RandomSongs from './routes/RandomSongs';
import TopTracksByCountry from './routes/TopTracksByCountry';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <Home /> },
      {path: "home", element: <Home />},
      {path: "recommendation", element: <SongRecommendation />},
      {path: "top-track-by-country", element: <TopTracksByCountry />},
      {path: "random-song", element: <RandomSongs />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
)
