import React from "react";
import BlogPage from "../component/blogPage";
import foto from "../asset/blog1-bg.jpg"

function Blog4(){
    const items = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."];
    const items2= ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."];
    const items3= ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."];


    return(
        <div>
            <BlogPage
                img={foto}
                title="Blog 4"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                title1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                content1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                title2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." 
                content2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                img1="https://images.unsplash.com/photo-1611095772763-5b6b7b0b9b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                title3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                content3="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                img2="https://images.unsplash.com/photo-1611095772763-5b6b7b0b9b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                items={items}
                items2={items2}
                items3={items3}


                />
        </div>
    )
}

export default Blog4;