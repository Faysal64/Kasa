import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import About from './components/About';
import AppartementPage from './components/AppartementPage.jsx';


const router = createBrowserRouter([ {
  path:"/",
  element: <App />,
  errorElement: <h1>404 not found</h1>
},
{
  path: "/Appartement",
  element: <AppartementPage />, 
},
{
  path: '/about',
  element: <About />, 
},

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
