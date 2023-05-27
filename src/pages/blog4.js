import React from "react";
import BlogPage from "../component/blogPage";
import blog4bg from "../asset/blog4_bg.jpg";
import blog4img1 from "../asset/img_blog4_1.jpg";
import blog4img2 from "../asset/img_blog4_2.jpg";

function Blog4(){
    const items = ['Gunakan Kata Sandi Yang Kuat, pastika kata sandi yang digunakan adalah kata sandi yang kuat dengan kombinasi huruf besar, huruf kecil, angka, dan simbol. Semakin panjang kata sandi yang digunakan, semakin sulit untuk ditebak.',
    'Jaga Informasi Pribadi, Internet adalah dunia yang luas kita tidak tau ada siapa saja disana ada yang berniat jahat atau tida maka itu kita harus menjaga diri masing-masing dengan tidak membagikan informasi seperti nama, alamat, nomor telepon, nomor rekening, dan informasi pribadi lainnya kepada orang yang di internet.',
    'Jangan Mudah Percaya, Internet penuh dengan informasi, tetapi tidak semua benar. Ada banyak berita palsu atau informasi yang salah. Penting bagi kita untuk mengeceknya berulang-ulang',
    'Batasi WAktu yang Dihabiskan di Internet, meskipun internet menyenangkan, kita juga perlu menghabiskan waktu di kehidupan nyata. lakukan kegiatan fisik seperti bermmain bola dengan teman, bermain sepeda, dan lain sebagainya yang bisa kamu lakukan bersama dengan temanmu.'];
    const items2= ['Memiliki teman di kehidupan nyata',
    'lebih sehat karena tidak melulu berada di depan layar komputer atau ponsel',
    'Internet menjadi sahabat yang baik',
    'Kita bisa mendapatkan informasi yang benar'];
    const items3= ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."];


    return(
        <div>
            <BlogPage
                img={blog4bg}
                img1={blog4img1}
                img2={blog4img2}
                title="Aman Menggunakan Internet"
                content="Ambil langkah yang benar menuju dunia yang luas"
                title1="Keanap Kita harus berhati-hati?"
                content1="Halo, teman-teman! Apa kabar? Di dunia yang modern ini, kita sering menggunakan internet
                untuk mencari informasi, bermain game, atau berhubungan dengan teman-teman. Namun,
                penting bagi kita untuk belajar menggunakan internet dengan aman. Di artikel ini, kita akan
                belajar beberapa tips sederhana untuk menjaga diri kita sendiri ketika menggunakan
                internet. Yuk, kita mulai!"
                title2="Bagaimana kita memulai Agar aman?" 
                content2="Yang Harus dilaukan agar aman menggunakan internet diantaranya adalah:"
                title3="Apa yang kita dapatkan?"
                content3="Dari beberapa saran di atas, kita bisa :"
                title4="Kesimpulan"
                content4="Menggunakan internet dengan aman adalah tanggung jawab kita semua.
                Dengan mengikuti tips ini, kita bisa menjaga diri kita sendiri dari bahaya dan mengambil
                manfaat yang positif dari internet. Ingatlah selalu untuk menggunakan internet dengan bijak
                dan bertanggung jawab. Tetaplah belajar dan menikmati pengalaman di dunia maya, namun
                jangan lupakan kehidupan nyata yang indah di sekitar kita. Teruslah bersenang-senang dan
                tetap aman di dunia maya!"
                items={items}
                items2={items2}
                items3={items3}


                />
        </div>
    )
}

export default Blog4;