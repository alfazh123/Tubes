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
          <Link to="/" className="link-btn" >Get start!</Link>
        </div>

      </div>

      <main className='home-content'>

        <div className='homeSub-content'>
          <h2>Jadi Aman</h2>
          <p>Selamat datang di website kami! Di sini, Anda akan menemukan berbagai materi yang menarik dan bermanfaat tentang berinternet dengan bijak, terutama ditujukan untuk anak-anak SD. Kami berkomitmen untuk menyediakan sumber daya yang aman, edukatif, dan menyenangkan bagi anak-anak dalam menjelajahi dunia online.<br/><br/>

Dengan konten-konten yang disusun secara sistematis, anak-anak dapat belajar tentang keselamatan online, etika internet, pencarian informasi yang akurat, dan penggunaan media sosial yang tepat untuk usia mereka. Kami juga memberikan panduan tentang penggunaan aplikasi edukasi, manajemen waktu yang sehat, dan pentingnya melindungi privasi mereka saat berinternet.<br/><br/>

Selain itu, kami berfokus pada pengembangan kemampuan anak-anak dalam berpikir kritis, mengevaluasi informasi, dan memanfaatkan internet secara produktif. Dengan fitur-fitur interaktif dan konten multimedia yang menarik, kami berharap dapat menciptakan pengalaman yang interaktif dan menyenangkan bagi anak-anak saat belajar dan bersenang-senang di dunia maya. Bergabunglah dengan kami untuk memastikan anak-anak dapat menjelajahi internet dengan bijak dan bertanggung jawab.</p>
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