import React from "react";
import logo from "../assets/logo";
import Header from "../components/header";
import About from "../components/about";
import ArticleList from "../components/article-list";
import Article from "../components/article";

import blogData from "../data/blog";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} />
      <ArticleList >
        <Article title={blogData.title} date={blogData.date} preview={blogData.preview} />
      </ArticleList>
    </div>
  );
}

export default App;
