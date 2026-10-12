import Splash from "@/components/Splash";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Splash />
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
