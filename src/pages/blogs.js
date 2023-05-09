import React from 'react';
import './blogs.css';
import Navbar from '../component/navbar';
import { Link } from 'react-router-dom';
import foto from './foto.png';

function blog() {
  return (
    <div className='blog'>
        <Navbar />
      <div className='Blogs'>
        <h1>my blogs</h1>
        <p>bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
      </div>

      <div className='content'>
        <div className='card'>
          <Link to="/blogs/blog1" className="link"><img src={foto} size={2}></img></Link>
        </div>

        <div className='card'>
          <Link to="/blogs/blog2" className="link">blog2</Link>
        </div>

        <div className='card'>
          <Link to="/blogs/blog3" className="link">blog3</Link>
        </div>

      </div>
      
      <div className='Blogs'>
        <p>bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
      </div>
    </div>
  );
}

export default blog;