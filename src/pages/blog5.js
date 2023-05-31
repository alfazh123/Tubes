import React from "react";
import BlogPage from "../component/blogPage";
import imgBlog1 from '../asset/img_blog5_1.jpg';
import imgBlog2 from '../asset/img_blog5_2.jpg';
import Blog5bg from '../asset/blog5_bg.jpg';

function blog5() {
    const items = ['Masalah pada kesehatan mental',
    
    'Masalah pada hubungan sosial',
    
    'Masalah pada kesehatan fisik',]
    const items2 = ['Istirahat yang cukup, pakai aturan 20-20-20, yaitu setiap 20 menit, coba untuk melihat objek yang berjarak sejauh 20 kaki selama 20 detik.',
    
    'Beraktivitas fisik, seperti bermain bola, bermain sepeda, dan lain sebagainya yang bisa kamu lakukan bersama dengan temanmu.',
    
    'Bersosialisasi dengan teman-teman di dekat rumah',]
    const items3 = ['This','is','a','list','of','items']
    return(
        <div>

            <BlogPage
                img={Blog5bg}
                img1={imgBlog1}
                img2={imgBlog2}
                title="Waktu Bermain Internet"
                content="Beri waktu untuk dunia nyatamu"
                title1="Waktu Bermain Internet"
                content1="waktu penggunaan internet yang sehat, terutama bagi anak-anak dan juga remaja. Kalian pasti tahu kan, sekarang ini rasanya kita seperti tidak bisa lepas dari yang namanya internet. Tapi, kalian tahu ga kalau terlalu banyak waktu yang dihabiskan di depan layer gadget baik handphone maupun laptop dapat memiliki dampak negatif pada kesehatan dan kesejahteraan kita loh!. Oleh karena itu, penting bagi kita untuk mengetahui betapa pentingnya istirahat, beraktivitas fisik, dan waktu bersosialisasi di dunia nyata.
                "
                title2="Bahaya kecanduan Internet"
                content2="Orang yang sudah terlanjur kecanduan dengan internet seperti video game, youtube, tiktok, dan lain sebagainyapasti sebagian besar dari mereka rela menghabiskan waktu hingga berjam-jam demi bermain internet, memang apa saja penyebabnya? Berikut ini adalah beberapa penyebab kecanduan internet:"
                title3="Bagaimana kita memulai Agar aman?"
                content3="jika kalian bingung mulai dari mana berikut ini adalah beberapa tips yang bisa kalian lakukan untuk mengurangi kecanduan internet:"
                title4="Kesimpulan"
                content4="Jangan berlama-lama berada di dunia internet luangkan waktu untuk membenagun dirimu, bersosialisasi dengan teman-temanmu, dan beraktivitas fisik agar kesehatanmu terjaga. ingatlah didunia ini tidak ada yang lebih peduli kepada kita kecuali diri sendiri untuk itu jangan buang-buang waktu di internet untuk hal yang tidak berguna."
                items={items}
                items2={items2}
                items3={items3}
                />
        </div>
    )
}

export default blog5;