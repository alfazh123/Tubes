import React from 'react';
import './blogs.css';
import Navbar from '../component/navbar';
import foto from '../asset/card.png';
import CardBlog from '../component/CardBlog';

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
          <CardBlog to='/blog1' src={foto} alt='foto' className='card'/>
          <CardBlog src={foto} alt='foto' className='card'/>
          <CardBlog src={foto} alt='foto' className='card'/>
        </div>

      </div>
      
      <div className='Blogs'>
        <p>bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
      </div>
    </div>
  );
}

export default blog;