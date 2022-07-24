import React from "react";
import ReactDOM from "react-dom/client";

// import Content, { frontMatter } from './content.mdx';

import App from "./components/App";
import "./css/reset.css";
import "./css/App.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
