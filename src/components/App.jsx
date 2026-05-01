import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./article-list";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
    </div>
  );
}

export default App;
