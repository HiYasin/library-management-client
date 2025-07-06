import { Outlet } from "react-router";
import Footer from "./components/module/Footer";
import Navbar from "./components/module/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="font-mono">
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
