import React from "react";
import Navbar from '../component/navbar';
import './blogPage.css';

function BlogPage(props) {
    
    const items = props.items;
    const listItems = items.map((item) => <li key={item.toString()}>{item}</li>);
    const items2 = props.items2;
    const listItems2 = items2.map((item) => <li key={item.toString()}>{item}</li>);
    const items3 = props.items3;
    const listItems3 = items3.map((item) => <li key={item.toString()}>{item}</li>);


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
                <div className="BlogPage-Content" >
                    <div className="BlogPage-Content-sumary">   
                        <h2>{props.title1}</h2>
                        <p>{props.content1}</p>
                    </div>

                    <div className="first_blogContent">
                        <div className="first_blogContent-img">
                            <img src={props.img1} alt="img1"className="img1"/>
                        </div>
                        <div className="first_blogContent-text">
                            <h2>{props.title2}</h2>
                            <p>{props.content2}</p>
                            <ul>{listItems}</ul>
                        </div>
                    </div>

                    <div className="mid_blogContent">
                        <h2>{props.title3}</h2>
                        <p>{props.content3}</p>
                        <ul>{listItems2}</ul>
                    </div>

                    <div className="last_blogContent">
                        <h2>{props.title4}</h2>
                        <p>{props.content4}</p>
                        <ul>{listItems3}</ul>
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