import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <main className="flex-grow-1 container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
