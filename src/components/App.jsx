import React from "react";
import blogData from "../data/blog";
import Header from "./components/header";
import About from "./components/about";
import articleList from "./components/article-list";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Article />
    </div>
  );
}

export default App;
