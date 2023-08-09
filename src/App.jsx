import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./pages/home/Home"));
const Product = lazy(() => import("./pages/product/Product"));
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Context } from "./context/ThemeContext";
import Modal from "./components/modal/Modal";

function App() {
  const { isOpened, setIsOpened } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Suspense>
        {isOpened && <Modal />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
