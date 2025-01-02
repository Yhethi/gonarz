import { useEffect } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import RoadmapSection from "./components/RoadmapSection";
import FundHoldingsSection from "./components/FundHoldingsSection";
import PartnersSection from "./components/PartnersSection";
import { DjConsole } from "./components/DjConsole";
import { Luciernagas } from "./components/utils/Luciernagas";
import TokenSection from "./components/TokenSection";

function App() {
  useEffect(() => {
    window.scrollTo(top);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <DjConsole />
      <FeaturesSection />
      <RoadmapSection />
      <PartnersSection />
      <TokenSection />
      <FundHoldingsSection />
      <Luciernagas />
    </>
  );
}

export default App;
