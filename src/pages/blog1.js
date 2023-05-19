import React from "react";
import BlogPage from "../component/blogPage";
import foto from "../asset/card.png";

function Blog1() {
    const items=['item1','item2','item3','item4','item5','item6','item7','item8','item9','item10','item11','item12'];
    const items2=['a','b','c','d'];
    const items3=['e','f','g','h'];

    return (
        <div>
            <BlogPage
                img1={foto}
                title="Hindari Hoax"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero vitae magna vulputate vestibulum. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet."
                title1="Blog 1"
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero vitae magna vulputate vestibulum. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet."
                title2="Blog 2"
                content2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget libero vitae magna vulputate vestibulum. Sed vitae nisl eget nunc aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet."
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