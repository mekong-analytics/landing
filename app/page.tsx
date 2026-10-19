import { Nav } from "./components/Nav";
import { HeroAnimation } from "./components/HeroAnimation";
import { Hero } from "./components/Hero";
import { Approach } from "./components/Approach";
import { Coverage } from "./components/Coverage";
import { Access } from "./components/Access";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-mekong-deep antialiased">
      <Nav />
      <section>
        <HeroAnimation />
      </section>
      <Hero />
      <Approach />
      <Coverage />
      <Access />
      <Footer />
    </div>
  );
}
