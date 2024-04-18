import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import About from './Components/About/About.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('/FakeData.json')
      },
      {
        path: '/category/:id',
        element : <PrivateRoute> 

          <CategoryDetails></CategoryDetails>

         </PrivateRoute>
      },
      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path: '/register',
        element : <Register></Register>
      },
      {
        path: '/about',
        element : <ProtectedRoute>
          <About></About>
        </ProtectedRoute>
      },
      {
        path:'/updateProfile',
        element : <UpdateProfile></UpdateProfile>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
