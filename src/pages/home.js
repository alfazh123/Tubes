import React from 'react';
import Navbar from '../component/navbar';
import './home.css';
import { Link } from 'react-router-dom';
import foto from '../asset/card.png';
import CardBlog from '../component/CardBlog';

function Home() {

  return (
    <div className='home'>
        <Navbar />
      <div className='hero'>
        <div className='hero-content'>
          <h1>welcom to lorem ipsum</h1>
          <p>be safety from internet</p>
          <Link to="/" className="link-btn" >Get start!</Link>
        </div>


      </div>

      <div className='home-content'>
        <h2>Logo</h2>
        <p>bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum bdjsbkdnasfnl lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum</p>
      

      
          <h2>Chose one!</h2>
        <div className='home-card'>
          <CardBlog to='/blog1' src={foto} alt='foto' className='card'/>
          <CardBlog to='/blog2' src={foto} alt='foto' className='card'/>
          <CardBlog to='/blog3' src={foto} alt='foto' className='card'/>
        </div>

      </div>

      <footer className='footer'>
        <p>project by Alfazh©️2023</p>
      </footer>

      
    </div>
  );
}

export default Home;