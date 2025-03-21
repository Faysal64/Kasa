import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About.jsx';
import Slideshow from './components/Slideshow.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, 
  },
  {
    path: '/Appartement/:id',
    element: <Slideshow />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
