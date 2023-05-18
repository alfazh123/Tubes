import React from "react";
import BlogPage from "../component/blogPage";

function Blog2(props){
    const items=['item1','item2','item3','item4'];
    const items2=['item5','item6','item7','item8'];
    const items3=['item9','item10','item11','item12'];

    return (
        <div>
            <BlogPage
                title="Blog Page2"
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

export default Blog2;   