import React from "react";
import "./scss/styles.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <LatestArticles />
      <Footer />
    </>
  );
};

export default App;
