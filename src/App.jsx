import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Category from './pages/categories'
import About from './pages/about-us'
import Contact from './pages/contact-us'
import AppLayout from './layouts/applayout'
import Home from './pages/home'
import { Toaster } from "sonner"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact-us',
        element: <Contact />
      },
    ]

  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </>
  )

}

export default App
