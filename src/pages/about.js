import React from 'react';
import Navbar from '../component/navbar';
import './about.css';
import TeamCard from '../component/TeamCard';
import foto from '../asset/foto-card1.png';
import profilAlfazh from '../asset/profil litdig/profil_alfazh.jpeg';
import profilCandra from '../asset/profil litdig/profil_candra.jpg';
import profilClarin from '../asset/profil litdig/profil_clarin.jpg';
import profilNasa from '../asset/profil litdig/profil_nasa.JPG';
import profilNovia from '../asset/profil litdig/profil_novia.JPG';
import profilShela from '../asset/profil litdig/profil_shela.jpg';

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
          <div className='headTeam'>
            <h1>Team</h1>
          </div>
          
          <div className="Container">
            <TeamCard 
              img={profilAlfazh}
              name="Ahmd Mufahras Li Alfazh Assardew"
              content="22051204020"
              work="Engginering"
              />
            <TeamCard
              img={profilCandra}
              name="Candra Bagus Ainur Rochman"
              content="22051204007"
              work="Content Writer Berbuat Baik Di Internet"
              />
            <TeamCard
              img={profilClarin}
              name="Clarinta Ghita Pradyan"
              content="22051204001"
              work="Content Writer Waktu Penggunaan Internet Yang Baik"
              />
            <TeamCard
              img={profilNasa}
              name="Nasa Nabila Adilia"
              content="22051204003"
              work="Content Writer Privacy"
              />
            <TeamCard
              img={profilNovia}
              name="Novia Putri Rahmadani"
              content="22051204039"
              work="Content Writer Menggunakan Internet Dengan Aman"
              />
            <TeamCard
              img={profilShela}
              name="Shelamita Sefiani"
              content="22051204018"
              work="Content Writer Hoax"
              />        
          </div>
        </div>

        <footer>
          <p></p>
        </footer>
    </div>
  );
}

export default about;