import React from "react";
import BlogPage from "../component/blogPage";

function blog5() {
    const items = ['This','is','a','list','of','items']
    const items2 = ['This','is','a','list','of','items']
    return(
        <div>

            <BlogPage
                img="https://images.unsplash.com/photo-1612835362596-4b0b2b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                title="Blog 5"
                content="This is blog 5"
                title1="Blog 5"
                content1="This is blog 5"
                img1="https://images.unsplash.com/photo-1612835362596-4b0b2b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                title2="Blog 5"
                content2="This is blog 5"
                items={items}
                title3="Blog 5"
                content3="This is blog 5"
                items2={items2}
                img2="https://images.unsplash.com/photo-1612835362596-4b0b2b0e2b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvbnRlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                items3={items}
                title4="Blog 5"
                content4="This is blog 5"
                
                />
        </div>
    )
}

export default blog5;