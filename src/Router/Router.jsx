import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import Home from '../Componnents/AllPages/HomeSection/Home/Home';
import Auth from '../Componnents/AllPages/Auth/Auth';
import Login from '../Componnents/AllPages/Auth/Login';
import Register from '../Componnents/AllPages/Auth/Register';
import Forgot from '../Componnents/AllPages/Auth/Forgot';
import AllServices from '../Componnents/AllPages/AllServices';
import SingleServices from '../Componnents/AllPages/SingleServices';
import CreateService from '../Componnents/AllPages/CreateService';
import Profile from '../Componnents/AllPages/Profile';
import PrivateRoute from '../Componnents/PrivateRoute/PrivateRoute';
import MyServices from '../Componnents/AllPages/MyServices';
import ServiceUpdate from '../Componnents/AllPages/ServiceUpdate';
import MyBookings from '../Componnents/AllPages/MYBookings';
import Error from '../Componnents/AllPages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/all-services', 
        loader: () => fetch('http://localhost:3000/all-services'),
        Component: AllServices, 
      },
      {
        path: 'all-services/:id',
        loader: ({params}) => fetch(`http://localhost:3000/all-services/${params.id}`),
        element: <PrivateRoute><SingleServices></SingleServices></PrivateRoute>

      },
      {
        path: '/add-services',
        element:<PrivateRoute><CreateService></CreateService></PrivateRoute>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: '/my-services',
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
      },
      {
        path: '/my-services-update/:id',
        element: <PrivateRoute><ServiceUpdate></ServiceUpdate></PrivateRoute>,
      },
      {
        path: '/my-bookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
      },
      { path: '*', Component: Error },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      { 
        path: '/auth/login',
        Component: Login,
       },
      { 
        path: '/auth/Register',
        Component: Register,
      },
      {
        path: '/auth/forgot',
        Component: Forgot,
      }
    ],
  },
]);

export default router;