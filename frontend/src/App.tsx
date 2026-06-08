import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import './App.css';

function App() {
  return (
    <>
      <NavBar></NavBar>

      {/* <p>lorem*1000</p> */}

      <main className="flex-grow-1 container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
