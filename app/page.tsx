import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Keys from "@/components/Keys";
import Methodology from "@/components/Methodology";
import Programs from "@/components/Programs";
import Community from "@/components/Community";
import Impact from "@/components/Impact";
import Future from "@/components/Future";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Keys />
      <Methodology />
      <Programs />
      <Community />
      <Impact />
      <Future />
      <Contact />
      <Footer />
    </main>
  );
}