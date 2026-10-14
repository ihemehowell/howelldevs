import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { OpenSource } from "./components/OpenSource";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="grain">
      <a
        href="#work"
        className="fixed left-4 top-4 z-[70] -translate-y-20 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg focus:translate-y-0"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <OpenSource />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}
