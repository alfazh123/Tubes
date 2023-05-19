import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/about';
import Blog1 from './pages/blog1';
import Blog2 from './pages/blog2';
import Blog3 from './pages/blog3';
import Blog4 from './pages/blog4';

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
    path: 'about',
    element: <About />
  },
  {
    path: 'blog1',
    element: <Blog1 />
  },
  {
    path: 'blog2',
    element: <Blog2 />
  },
  {
    path: 'blog3',
    element: <Blog3 />
  },
  {
    path: 'blog4',
    element: <Blog4/>
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
