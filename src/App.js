import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import Topnav from "./components/Topnav";
import Content from "./components/Content";
import Footer from "./components/Footer";



function App() {
  
  return (
    <>
    <Topnav/>
    <Content/>
    <Footer/>
    </>
  );
}

export default App;