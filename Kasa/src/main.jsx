import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'

const router = createBrowserRouter([ {
  path:"/",
  element: <App />,
  errorElement: <h1>404 not found</h1>
},
{
  path: "/Appartement",
  element: <h1>Nos appartements</h1>
},
{
  path: "/About",
  element: <h1>A propos</h1>
},
{
  path: "/404",
  element: <h1>404</h1>
}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
