import React from "react";
import MDX from "@mdx-js/react";

const BlogPage_lan = ({ components, ...props }) => {
    return (
        <MDX>
            <h1> {props.tittle} </h1>
            <p> {props.content} </p>
        </MDX>
    );
};

export default BlogPage_lan;