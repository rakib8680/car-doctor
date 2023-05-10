import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='container mx-auto'>
      <RouterProvider router={router} />
    </div>
)
