import React from 'react';
import Navbar from '../component/navbar';

function Home() {
  return (
    <div>
        <Navbar />
      <h1>Home</h1>
      <div className='hero'>
        <h2>welcom to lorem ipsum</h2>
        <p>be safety from internet</p>
      </div>

      <div className='content'>
        <h2>what must you do?</h2>
        <img src=''/>
        <h3>protect your personal data</h3>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <img src=''/>
        <h3>Avoid hoax</h3>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        <img src=''/>
        <h3>protect our kids</h3>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        
      </div>

      <div className='footer'>
        <img src=''/>
        <p>2023</p>
      </div>
    </div>
  );
}

export default Home;