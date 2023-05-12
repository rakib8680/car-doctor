import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import Bookings from './pages/Bookings'
import CheckOut from './pages/CheckOut'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/signUp/Register'
import PrivateRoute from './PrivateRoute'
import AuthProvider from './providers/AuthProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoute>
          <Bookings></Bookings>
        </PrivateRoute>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
)
