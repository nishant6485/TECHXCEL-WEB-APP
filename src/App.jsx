import React from "react";
import "./styles/App.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Contact />
      <Services />
      <Footer />
    </>
  );
};

export default App;
