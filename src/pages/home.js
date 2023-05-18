import React from 'react';
import Navbar from '../component/navbar';
import './home.css';
import { Link } from 'react-router-dom';
import foto from './foto.png';

function Home() {

  return (
    <div>
        <Navbar />
      <div className='hero'>
        <h1>welcom to lorem ipsum</h1>
        <p>be safety from internet</p>
        <Link to="/blogs" className="link">Get start!</Link>
      </div>

      <div className='home-content'>
        <div className='head-sub-content'>
          <h2>what must you do?</h2>
        </div>
        <div className='home-sub-content'>

          <div className='sub-content'>
            <img src={foto} className="foto-sub-content" alt=''/>
            <h3>protect your personal data</h3>
            <p>Sit reprehenderit aliquip laboris ad id aute do Lorem nostrud aliqua. Mollit duis nulla minim dolor minim ut ipsum ipsum eiusmod adipisicing occaecat ad esse aliquip. Est qui sit excepteur excepteur ullamco id culpa mollit laboris.

Cillum dolor labore esse deserunt. Aliquip et eu elit et elit excepteur. Incididunt ex anim sint elit magna eiusmod tempor anim fugiat sint minim id. Nisi velit enim elit eiusmod consectetur amet exercitation proident exercitation cupidatat mollit pariatur proident deserunt. Id laborum excepteur qui et esse aliquip elit et voluptate consectetur ex. Cillum duis sunt proident occaecat consequat quis ullamco non et Lorem fugiat pariatur non. Qui incididunt anim tempor mollit ea.</p>
          </div>

          <div className='sub-content'>
          <img src={foto} className="foto-sub-content" alt=''/>
            <h3>Avoid hoax</h3>
            <p>Nulla qui dolore officia aliqua non laborum laboris esse ullamco officia incididunt. Nisi laborum amet labore esse. Eu ut aliqua irure cillum in esse. Aliquip nisi reprehenderit quis nisi non. Nostrud pariatur ad qui duis aliqua et et. Aliqua velit id ullamco eu elit ut irure elit aliquip deserunt elit est deserunt nisi.

Do esse ullamco cupidatat minim consequat elit quis. Cillum exercitation sint esse voluptate esse labore ea sunt id officia anim anim magna. Ad aute fugiat dolor consequat cillum amet qui ut incididunt ea culpa. Fugiat occaecat adipisicing cillum esse sunt minim ullamco eiusmod deserunt consectetur proident est deserunt. Do nostrud adipisicing duis cillum culpa exercitation. Amet velit adipisicing nulla irure enim officia ea dolor amet qui in dolore eu. Do dolor ex tempor nisi dolore qui do quis.</p>
          </div>

          <div className='sub-content'>
          <img src={foto} className="foto-sub-content" alt=''/>
            <h3>protect our kids</h3>
            <p>Dolor voluptate commodo aliqua ex officia laboris ad qui commodo. Nisi aliquip ut eu ullamco minim cillum. Eiusmod aute est aliqua quis elit.

Velit Lorem voluptate labore anim minim adipisicing quis. Aute cupidatat cupidatat esse Lorem culpa amet exercitation sit consequat. In qui elit veniam labore nulla nostrud anim id reprehenderit amet do. Enim enim esse sint pariatur aliquip duis Lorem commodo elit non mollit officia veniam laboris. Elit aliqua est dolore commodo dolore officia sit. Commodo enim consequat minim nulla veniam deserunt consequat est nisi ipsum consectetur qui.</p>
          </div>
          
        </div>
      </div>

      
    </div>
  );
}

export default Home;