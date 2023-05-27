import React from "react";
import BlogPage from "../component/blogPage";
import bg from "../asset/blog1-bg.jpg";



function Blog1() {
    const items=['apa sumber dari berita merupakan sumbner terpercaya?',
                'apakah berita tersebut memiliki sumber yang jelas?',
                'berita seperti dilebih-lebihkan atau tidak?',
                'abaca teliti berita tersebut dan mebandingkan dengan media lain'];
    const items2=['Menimbulkan kekhawatiran atau rasa panik','Membuat perpecahan dimasyarakat','Bisa menyebabkan tindakan kekerasan atau kriminalitas','Menyebabkan kerugian bagi seseorang maupun lembaga tertentu','Membuat citra negatif suatu lembaga atau pemerintah','Melanggar hak asasi manusia'];
    const items3=['e','f','g','h'];

    return (
        <div>
            <BlogPage
                img={bg}
                img1='https://4.bp.blogspot.com/-vzQRC6Ua40U/V2IDe2zLY_I/AAAAAAAAAE8/K5FNJ13-6fYjHx5-1zzjp7hQS9m6MLxmACLcB/s1600/Kid-using-gadget.jpg'
                img2='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/10/23/512870-kids-children-with-gadgets.jpg'
                title="Hindari Hoax"
                content="Mari jadi pahlawan bagi semua orang dengan mencerna berita lebih baik."
                title1="Apa yang dimaksud dengan HOAX?"
                content1="Teman-teman, apa sih berita palsu atau hoax itu? Jadi, berita palsu atau hoax itu sebenarnya adalah
                informasi yang palsu yang sengaja disebar untuk mengecoh dan membohongi orang. Tujuan dari
                berita palsu ini beragam, bisa untuk membuat orang panik, cemas, atau mengacaukan pikiran
                mereka. Biasanya, berita palsu ini dibuat oleh orang-orang jahat yang ingin memanipulasi pendapat
                banyak orang atau memiliki niat jahat lainnya."
                title2="How We Now Hoax?"
                content2="berita bohon atau Hoax sangatlah mudah untuk menyebar di dunia maya untuk kita dapat mengetahui berita itu bohong atau tidak dengan mengecek beberapa poin dibawah ini"
                title3="Dampak negatif penyebaran berita hoax"
                content3="Tahu nggak, teman-teman? Penyebaran berita palsu itu punya dampak negatif yang banyak untuk
                masyarakat, misalnya:"
                title4="Kenapa kita harus menghindari berita HOAX?"
                content4="Jadi, sharing informasi palsu atau yang tidak benar itu bisa berdampak buruk bagi kita semua,
                teman-teman. Karena itu, sebelum kamu bagikan suatu informasi, pastikan kamu memeriksanya
                dulu. Hal ini akan membantu mencegah penyebaran berita palsu dan memastikan bahwa informasi
                yang kita terima dan bagikan adalah benar dan bisa dipercaya.
                Dengan adanya pengetahuan tentang berita palsu seperti ini, diharapkan kita bisa lebih
                paham tentang pentingnya memeriksa kebenaran informasi sebelum membagikannya. Kita harus
                semakin pandai memilih mana yang harus dibagikan dan mana yang tidak, supaya kita bisa terhindar
                dari penyebaran berita palsu dan informasi yang salah.
                Ingat, yuk, jadi generasi yang cerdas dan bertanggung jawab dalam menyebarkan informasi!"
                items={items}
                items2={items2}
                items3={items3}
            />
        </div>
    )
}

export default Blog1;