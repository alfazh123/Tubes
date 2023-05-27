import React from "react";
import BlogPage from "../component/blogPage";
import Blog2bg from '../asset/blog2_bg.jpg'
import imgBlog21 from "../asset/img_blog2_1.jpg";
import imgBlog22 from "../asset/img_blog2_2.jpg";

function Blog2(){
    const items=['Kartu Identitas kita','KAta sandi Akun', 'Alamat, terutama bagi orang yang kita tidak kenal','Foto-foto pribadi','Informasi tentang kesehatan, Keuangan, Keluarga, dan Lokasi kita'];
    const items2=['Penipuan Identitas','Penggunaan Identitas kita dengan Hal yang tidak baik','Bocornya informasi pribadi kita','Kita bisa diawasi oleh orang yang tidak kita kenal, yang mungkin ingin melakukan kejahatan kepada kita'];
    const items3=['item9','item10','item11','item12'];

    return (
        <div>
            <BlogPage
                img={Blog2bg}
                img1={imgBlog21}
                img2={imgBlog22}
                title="Keep Privacy"
                content="Jaga Diri dengan menjaga privasi anda"
                title1="What Is Privacy?"
                content1="Privasi adalah tentang menjaga
                rahasia kita sendiri. Ini berarti kita bisa memutuskan siapa yang boleh tahu tentang informasi
                pribadi kita. Privasi melindungi kita dari orang-orang yang ingin melakukan kejahatan kepada kita
                seprti mengawasi kita atau menggunakan informasi kita tanpa izin kita. Lebih mudahnya
                orang-orang ini mencuri data-data kita.
                Namun, juga pasti ada dong beberapa situasi di mana privasi bisa dikalahkan oleh
                kepentingan yang lebih besar. Apa kepentingan besar tersebut? Contoh kepentingan besar
                tersebut adalah keamanan negara atau kesehatan masyarakat. Tapi dalam kebanyakan kasus
                sehari-hari, privasi kita harus dihormati dan dilindungi. Kebijakan dan peraturan tentang privasi
                penting agar informasi pribadi kita tidak disalahgunakan dan kita memiliki kendali atas data kita
                sendiri."
                title2="Apa saja Yang harus dilindungi?"
                content2="agar kita aman kita harus menjaga privacy, berikut apa yang harus kita jaga agar kita lebih aman :"
                title3="Apa dampaknya?"
                content3="Kenapa kita harus menjaga data kita memang kalau data kita bocor apa ruginya, Oh jangan Salah teman-teman jika kalian tidak menjaga data kalian dengan aman maka yang mungkin terjadi adalah :"
                title4="Jadi menjaga Privaacy itu penting?"
                content4="Jadi,melindungi data pribadi itu sanagt penting ya. Jika kita tidak bisa melindungi
                data-data kita, kemudian data kita diketahui sama orang lain, tentu saja itu bahaya banget. Nanti
                
                identitas kita bisa dicuri, uang kita juga bisa dicuri. Memangnya kalian mau kalau nama kalian
                dipakai sama temen kalian? Tentu tidak kan. Maka dari itu, kalian harus pintar menjaga data diri
                kalian. Langkah pencegahannya yang paling mudah adalah membuat kata sandi yang susah buat
                ditebak sama orang lain.
                Terus kalau datanya bocor bagaimana? Kalau data kita sampai bocor, langkah pertama yang harus
                diambil yaitu mengubah kata sandi. Setelah mengganti kata sandi, kita harus melaporkan ke
                pihak yang berwenang. Siapa pihak berwenang tersebut? Tentu saja polisi. Ingat ya, kalau data
                kita sampai bocor, kita harus segera mengambil tindakan terutama melaporkan kebocoran
                tersebut. Hal-hal tadi bakalan bisa bantu kita untuk melindungi data kita dari ancaman orang lain
                yang mau memanfaatkan data kita tanpa izin."
                items={items}
                items2={items2}
                items3={items3}
            />
        </div>
    )
}

export default Blog2;   