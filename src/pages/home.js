import React from 'react';
import Navbar from '../component/navbar';
import './home.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../component/ImageSlider';
import { SliderData } from '../component/SliderData';
import { FaArrowDown } from 'react-icons/fa';


function Home() {

  //make when we push the button, it will go to the top of the id pilihan

  return (
    <div className='home'>
        <Navbar />

      <div className='hero'>

        <div className='hero-content'>
          <h1>JadiAman</h1>
          <p>memberikan edukasi internet supaya aman di dunia maya</p>
          <a href='#pilihan' className='link-btn'>Mulai Belajar</a>
        </div>

      </div>

      <main className='home-content'>
        
        <div className='home-content-section' id='pilihan'>
          
            <h2>Chose one!</h2>
          <div className='home-card'>
            <ImageSlider slides={SliderData}/>
          </div>
        
        </div>

        <div className='homeSub-content'>
          <h2>Jadi Aman</h2>
          <p>Jadi Aman merupakan website yang dibuat dengan tujuan membangun pemahaman tentang dunia internet kepada anak-anak demi menjaga keamanan mereka di dunia maya.<br/>
          di website ini juga tersedia quiz untuk menguji kemampuan ber internet kalian di tombol dibawah ini</p>
          <Link to='/quiz' className='link-btn'>Uji Dirimu</Link>
          
        </div>


      </main>


      <footer className='footer'>
        <p>project by Alfazh©️2023</p>
      </footer>

      
    </div>
  );
}

export default Home;