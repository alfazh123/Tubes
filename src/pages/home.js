import React from 'react';
import Navbar from '../component/navbar';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Navbar />
      <div className='hero'>
        <h1>welcom to lorem ipsum</h1>
        <p>be safety from internet</p>
        <Link to="/blogs" className="link">Get start!</Link>
      </div>

      <div className='content'>
        <h2>what must you do?</h2>

        <div className='sub-content'>
          <img src=''alt=''/>
          <h3>protect your personal data</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>

        <div className='sub-content'>
          <img src=''alt=''/>
          <h3>Avoid hoax</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>

        <div className='sub-content'>
          <img src=''alt=''/>
          <h3>protect our kids</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        
      </div>

      
    </div>
  );
}

export default Home;