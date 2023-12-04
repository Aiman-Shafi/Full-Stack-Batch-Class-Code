import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import About from "./components/About";
// import Movies from "./components/Movies";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Movies></Movies> */}
    </>
  );
}

export default App;
