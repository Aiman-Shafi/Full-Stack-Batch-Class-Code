import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hook from "./components/Hook";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/" element={<Hook />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
