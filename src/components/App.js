import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "../routes/list";
import Header from "../components/Header";
import Color from "color";
import Article from "../routes/article";

const background = Color("#F471FF").rotate(Math.floor(Math.random() * 360));

const App = () => {
  return (
    <BrowserRouter>
      <Header background={background} />
      <Routes>
        <Route path="/" element={<IndexPage background={background} />} />
        <Route
          path="/post/:title"
          element={<Article background={background} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
