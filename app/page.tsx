import About from "@components/home-section/about/about";
import Blogs from "@components/home-section/blogs/blog";
import ExperienceSection from "@components/home-section/experience/experience";
import Hero from "@components/home-section/hero/hero";
import Projects from "@components/home-section/projects/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Blogs />
    </main>
  );
}
