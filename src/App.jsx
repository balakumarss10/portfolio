import { Element } from "react-scroll";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import { Lines } from "react-preloaders";

function App() {
  return (
    <>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Footer />
      <Lines time={3000} color="#2c67f2" />
    </>
  );
}

export default App;
