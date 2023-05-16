import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Blogs from './pages/blogs';
import About from './pages/about';
import Blog1 from './pages/blog1';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />
  },
  { 
    path: 'blogs',
    element: <Blogs />
  },
  { 
    path: 'about',
    element: <About />
  },
  {
    path: 'blog1',
    element: <Blog1 />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
