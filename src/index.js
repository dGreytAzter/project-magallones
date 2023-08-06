import React from 'react';
import ReactDOM from 'react-dom/client';
import './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Nav from './Components/Home/Nav';
import OurServices from './Components/OurServices';


const router = createBrowserRouter ([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <OurServices />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
