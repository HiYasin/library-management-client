import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="font-mono">
      <Navbar />
      <Hero />
      <Discover />
      <Footer />
    </div>
    </>
  );
}

export default App;
