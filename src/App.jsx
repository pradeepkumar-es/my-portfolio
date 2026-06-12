import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { Suspense } from "react";
import {Cursor} from "./components/Cursor";
const Home = React.lazy(() => import("./components/Home")); //it is recommended to use default export of lazy compoenent
function App() {
  return (
    <>
    <Cursor/>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
          <Routes>
            <Route
              path="/"
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection:"column",
                        gap:"10px",
                        minHeight:"100vh" //div can not strech itself , it take content height, hence height is required to give when we want to center something
                      }}
                    >
                      <h1>Welocome To My Portfolio</h1>
                      <h2>Loading....</h2>
                    </div>
                  }
                >
                  <Home />
                </Suspense>
              }
            />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
