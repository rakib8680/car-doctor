import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/signUp/Register'

const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path:'login',
        element : <Login></Login>
      },
      {
        path:'register',
        element : <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className='container mx-auto'>
      <RouterProvider router={router} />
    </div>
)
