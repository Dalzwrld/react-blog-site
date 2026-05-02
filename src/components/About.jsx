import React from 'react'
import logo from "../assets/logo";
import blogData from "../data/blog";

console.log(blogData);

function About({ image, about }) {
  return (
    <aside>
        <img src={image} alt="blog logo" />
        <p>
            {about}
        </p>
    </aside>
  )
}

export default About