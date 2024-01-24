import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css";
import ScrollToTop from './components/global-components/ScrollToTop.js'
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <ScrollToTop />
        <App className="font-poppins" />
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
