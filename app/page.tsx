import About from "@/components/home-section/about/about";
import Hero from "@/components/home-section/hero/hero";

export default function Home() {
  return (
     <main className="bg-[url('/assets/images/BackgroundPattern.png')] bg-auto bg-top-right bg-no-repeat h-screen w-full py-4">
       <Hero />
       <About />
     </main>
  );
}
