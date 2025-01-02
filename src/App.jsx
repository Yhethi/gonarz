import { useEffect } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  useEffect(() => {
  }, []);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
