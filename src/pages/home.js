import React from 'react';
import Navbar from '../component/navbar';
import './home.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../component/ImageSlider';
import { SliderData } from '../component/SliderData';


function Home() {

  return (
    <div className='home'>
        <Navbar />

      <div className='hero'>

        <div className='hero-content'>
          <h1>Jadi Aman</h1>
          <p>memberikan edukasi internet supaya aman di dunia maya</p>
          <Link to="/quiz" className="link-btn" >Uji Dirimu!</Link>
        </div>

      </div>

      <main className='home-content'>

        <div className='homeSub-content'>
          <h2>Jadi Aman</h2>
          <p>Selamat datang di Jadi Aman website yang memberikan edukasi internet, tentang keamanan data pribadi, berita bohong, dan pola hidup.</p>
        </div>

        <div className='home-content-section'>
          
            <h2>Chose one!</h2>
          <div className='home-card'>
            <ImageSlider slides={SliderData}/>
          </div>
        
        </div>

      </main>


      <footer className='footer'>
        <p>project by Alfazh©️2023</p>
      </footer>

      
    </div>
  );
}

export default Home;