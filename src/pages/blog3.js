import React from "react";
import BlogPage from "../component/blogPage";
import blog3bg from "../asset/blog3_bg.jpg";
import blog3img1 from "../asset/img_blog3_1.jpg";
import blog3img2 from "../asset/img_blog3_2.jpg";

function Blog3(){
    const items=['Jadilah sopan, Gunakan kata-kata yang baik dan sopan saat bercengkrama di internet',

    'Jadilah teladan kebaikan, dengan membagikan hal-hal yang baik dan positif di dunia maya',

    'Jauhi hal-hal yang buruk, seperti menghina dan meluaskan Hoax di nuia maya',

    'Lindungi dirimu dan temanmu, dengan tidak menyebarkan informasi pribadi dan rahasia',

    'Bagikan pengetahuan dan cerita mu, bangun komunitas yang positif dan menyenangkan di dunia maya'];

    const items2=['Membuat Internet Menjadi Tempat yang Menyenangkan',

    'Menguatkan Persahabatan dan Komunitas',

    'Menginspirasi Orang Lain dengan berbuat baik dengan orang lain',

    'Menumbuhkan rasa Kebaikan dan Keberagaman antar sesama di dunia maya',

    'Membantu Membuat Dunia Lebih Baik'];
    const items3=['item9','item10','item11','item12'];

    return (
        <div>
            <BlogPage
                img={blog3bg}
                img1={blog3img1}
                img2={blog3img2}
                title="Berbuat Baik Di Internet"
                content="Jadikan Internet Dunia yang baik untuk semua orang."
                title1="Kenapa kita harus berbuat baik di internet?"
                content1="Dunia digital memanglah seru dan menyenangkan. internet menjadi seperti hutan ajaib yang bisa kita
                jelajahi setiap hari. Di sana, kita bisa bicara dengan teman jauh, mencari tahu hal-hal
                menarik, bahkan menemukan hiburan yang seru! Tapi, seiring dengan petualangan online
                kita, kita juga perlu waspada terhadap beberapa masalah yang bisa muncul. Ada berita
                bohong yang suka bergentayangan, serta orang yang suka berbuat jahat dan menipu di
                dunia maya. Makanya, kita harus saling berbagi kebaikan dan menciptakan lingkungan
                online yang asyik, positif, dan penuh kreativitas!"
                title2="Bagaimana Caranya?"
                content2="Di dunia maya yang seru ini, berbuat baik itu seperti menjadi superhero internet!
                Kamu bisa melakukan hal-hal yang positif dan membantu orang lain dalam petualangan
                onlinemu. Yuk, kita lihat beberapa contoh konkrit tentang berbuat baik di internet:"
                title3="Memang apa yang kita dapatkan?"
                content3="Mungkin banyak yang bertanya, apa yang kita dapatkan setelah kita berbuat baik di internet? Berbuat baik di internet itu menyenangkan dan bisa membuat dunia maya menjadi tempat
                yang lebih indah! Ini adalah beberapa hal positif yang bisa terjadi jika kita berbuat baik di
                internet:"
                title4="Jadi Berbuat Baik di Internet Itu Apa?"
                content4="Berbuat baik itu menjadi Pahlawan bagi semua orang, mari kita ingat betapa pentingnya berbuat baik di internet! Dengan
                sikap yang baik, kita bisa menciptakan dunia maya yang indah dan menyenangkan bagi
                semua orang. Ingatlah untuk selalu menghormati dan menghargai orang lain, membantu
                mereka dengan sukacita, dan menjadi teladan kebaikan. Kita pun akan merasakan
                kebahagiaan dan kepuasan saat memberikan dampak positif kepada orang lain. Jadilah
                pahlawan online yang berani dan bersemangat untuk menyebarkan kebaikan di dunia maya!
                Dengan tindakan-tindakan kecil, kita bisa membuat perbedaan yang besar dan membangun
                komunitas online yang penuh kasih sayang. Mari bersama-sama menjadikan internet
                sebagai tempat yang menyenangkan, aman, dan penuh kebaikan. Teruslah berbuat baik,
                anak-anak, dan jadilah penggerak perubahan positif di dunia maya! Semangat!"
                items={items}
                items2={items2}
                items3={items3}
            />
        </div>
    )
}

export default Blog3;