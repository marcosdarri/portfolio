import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
