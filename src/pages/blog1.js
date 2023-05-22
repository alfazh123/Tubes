import React from "react";
import BlogPage from "../component/blogPage";
import foto from "../asset/card.png";



function Blog1() {
    const items=['apa sumber dari berita merupakan sumbner terpercaya?',
                'apakah berita tersebut memiliki sumber yang jelas?',
                'berita seperti dilebih-lebihkan atau tidak?',
                'abaca teliti berita tersebut dan mebandingkan dengan media lain'];
    const items2=['a','b','c','d'];
    const items3=['e','f','g','h'];

    return (
        <div>
            <BlogPage
                img1='https://4.bp.blogspot.com/-vzQRC6Ua40U/V2IDe2zLY_I/AAAAAAAAAE8/K5FNJ13-6fYjHx5-1zzjp7hQS9m6MLxmACLcB/s1600/Kid-using-gadget.jpg'
                img2='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/10/23/512870-kids-children-with-gadgets.jpg'
                title="Hindari Hoax"
                content="Jaga orang-orang disekitarmu dari hoax"
                title1="Apa yang dimaksud dengan HOAX?"
                content1="Berita palsu atau hoaks merupakan sebuah informasi yang disebarkan dengan tujuan 
                menyesatkan dan menyebarkan kebohongan atau propaganda. Istilah lain juga mengatakan bahwa berita 
                hoax adalah informasi yang tidak benar atau disengaja dibuat palsu dan disebarluaskan sebagai berita 
                yang benar dengan tujuan tertentu. Hoax biasanya dapat menimbulkan kepanikan, kecemasan, dan 
                kebingungan pada masyarakat yang menerima informasi tersebut. Berita palsu sering kali didesain oleh 
                beberapa oknum nakal untuk memanipulasi pendapat publik atau tujuan tertentu lainnya."
                title2="Bagaimana Kita bisa mengetahuinya?"
                content2="berita bohon atau Hoax sangatlah mudah untuk menyebar di dunia maya untuk kita dapat mengetahui berita itu bohong atau tidak dengan mengecek beberapa poin dibawah ini"
                title3="Blog 3"
                content3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero vitae magna vulputate vestibulum. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet."
                title4="Blog 4"
                content4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero vitae magna vulputate vestibulum. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet."
                items={items}
                items2={items2}
                items3={items3}
            />
        </div>
    )
}

export default Blog1;