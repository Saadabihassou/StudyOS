import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Beams from "./components/styles/Beams";
import Trust from "./components/Trust";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* Background Beams */}
      <div className="absolute inset-0">
        <Beams />
      </div>
      <Navbar />
      <Hero />
      <Trust />
    </main>
  );
}
