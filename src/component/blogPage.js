import React from "react";
import Navbar from '../component/navbar';
import './blogPage.css';

function BlogPage(props) {
    const items=props.items;
    const listItems=items.map((item)=>
        <li>{item}</li>
    );

    return (
        <div className="blogPage">
            <Navbar/>

            <body>
                <header className="BlogPage-Hero">
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                </header>
            </body>

            <main>
                <div className="BlogPage-Content">
                    <h2>{props.title1}</h2>
                    <p>{props.content1}</p>

                    <div className="main_blogContent">
                        <h2>{props.title2}</h2>
                        <p>{props.content2}</p>
                        <ul>{listItems}</ul>
                    </div>

                    <div className="main_blogContent">
                        <h2>{props.title3}</h2>
                        <p>{props.content3}</p>
                        <ul>{listItems}</ul>
                    </div>

                    <div className="main_blogContent">
                        <h2>{props.title4}</h2>
                        <p>{props.content4}</p>
                        <ul>{listItems}</ul>
                    </div>

                </div>
            </main>

            <footer>
                <p>project by Alfazh©️2023</p>
            </footer>
        </div>
    )
}

export default BlogPage;