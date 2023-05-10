import React from 'react';
import './blogs.css';
import Navbar from '../component/navbar';
import { Link } from 'react-router-dom';
import foto from '../asset/card.png';

function blog() {
  return (
    <div className='blog'>
        <Navbar />
      <div className='Blogs'>
        <h1>my blogs</h1>
        <p>bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
      </div>

      <div className='blog-content'>
          <h2>Chose one!</h2>
        <div className='blog-card'>
          <Link to="/blogs/blog1" className="link"><img src={foto} alt="foto-blog" className='foto-blog' /></Link>
        
          <Link to="/blogs/blog2" className="link"><img src={foto} alt="foto-blog" className='foto-blog' /></Link>
        
          <Link to="/blogs/blog3" className="link"><img src={foto} alt="foto-blog" className='foto-blog' /></Link>
          
        </div>

      </div>
      
      <div className='Blogs'>
        <p>bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
      </div>
    </div>
  );
}

export default blog;