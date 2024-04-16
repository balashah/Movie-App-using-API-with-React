import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';
import Home from './Components/Home';

let allRoutes = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"movie-details/:id",
      element:<MovieDetails/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);
