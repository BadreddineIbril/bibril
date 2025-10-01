import "./styles.css";
import Hero from "./_components/hero";
import About from "./_components/about";
import Projects from "./_components/projects";
import Work from "./_components/work";

export default function Home() {
  return (
    <main data-page="home">
      <Hero />
      <About />
      <Projects />
      <Work />
    </main>
  );
}
