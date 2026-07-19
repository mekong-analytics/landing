import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Approach } from "./components/Approach";
import { Coverage } from "./components/Coverage";
import { Access } from "./components/Access";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Coverage />
        <Access />
      </main>
      <Footer />
    </>
  );
}
