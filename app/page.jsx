import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
