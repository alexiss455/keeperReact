import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Header from "./assets/header";
import Footer from "./assets/footer";
import "./components/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="main">
      <App />
    </div>
    <Footer />
  </React.StrictMode>
);
