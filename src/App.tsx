import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <div style={{ backgroundColor: '#f5f5f5', textAlign: 'center', padding: '4px', fontSize: '14px' }}>
  🚧 Under Construction — EDV AI Solutions is live but still in progress.
</div>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
