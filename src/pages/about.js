import React from 'react';
import Navbar from '../component/navbar';
import './about.css';

function about() {
  return (
    <div className='about'>
        <Navbar />
        <div className="hero-about">
          <h1>About the Website and Team</h1>
          website ini ditujukan untuk anak-anak dan orang tua yang mungkin masih bingung dengan penggunaan ponsel, karena pada zaman sekarang ponsel merupakan objek yang penting bagi semua kalangan dari anak-anak sampai orang tua. 
          
          dengan adanya website ini diharapkan dapat membantu anak-anak bahkan semua orang agar bisa melindungi diri dari bahaya yang ada di internet.
        </div>

        <div className="team">
          <h1>Team</h1>
          
            'Ahmd Mufahras Li Alfazh Assardew' As Engginering<br/>
            'Candra Bagus Ainur Rochman' As Content Writer Berbuat Baik Di Internet<br/>
            'Clarinta Ghita Pradyan' As Content Writer Waktu Penggunaan Internet Yang Baik<br/>
            'Nasa Nabila Adilia' As Content Writer Privacy<br/>
            'Novia Putri Rahmadani' As Content Writer<br/>
            'Shelamita Sefiani' As Content Writer Hoax<br/>
          
        </div>

        <footer>
          <p></p>
        </footer>
    </div>
  );
}

export default about;