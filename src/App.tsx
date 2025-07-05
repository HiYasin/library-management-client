import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="font-mono">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </>
  );
}

export default App;
