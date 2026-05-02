import React from "react";
import logo from "../assets/logo";
import Header from "./Header";
import About from "./About";
import ArticleList from "./Article-list";
import Article from "./Article";

import blogData from "../data/blog";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} />
      <ArticleList >
        <Article title={post.title} date={post.date} preview={post.preview} />
      </ArticleList>
    </div>
  );
}

export default App;
