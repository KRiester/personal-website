import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Focus from "@/components/Projects";
import Contact from "@/components/Contact";

function Divider() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Focus />
        <Divider />
        <Contact />
      </main>
    </>
  );
}
