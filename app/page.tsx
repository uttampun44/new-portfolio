import About from "@components/home-section/about/about";
import Hero from "@components/home-section/hero/hero";
import Experience from "@components/home-section/experience/experience";
import Projects from "@components/home-section/projects/projects";

export default function Home() {
  return (
     <main>
       <Hero />
       <About />
       <Experience />
       <Projects />
     </main>
  );
}
