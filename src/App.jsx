import React from "react";
import "./scss/styles.scss";
import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <TopNav />
      <HeroSection />
      <WhyChoose />
      <LatestArticles />
      <Footer />
    </>
  );
};

export default App;
