import React from "react";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Study from "./components/study/study";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/App.module.scss";
const App = () => {
  //don't forget to add font link in index.html
  return (
    <div>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Study />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
