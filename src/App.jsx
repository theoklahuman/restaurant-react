import Navbar from "./Navbar";
import Footer from "./Footer";
import MainPageBody from "./MainPageBody";
import { useState } from "react";
import "./App.css";
import "./index.css";
import "../src/scss/styles.scss";
import * as bootstrap from "bootstrap";

const isLoggedIn = true;

function App() {
  const [activeTab, setActiveTab] = useState("Homepage");
  function loadTab(tabInfo) {
    setActiveTab(tabInfo);
  }

  return (
    <div className="App">
      <Navbar status={isLoggedIn} onSelect={loadTab} />
      <MainPageBody activeTab={activeTab} />
      <Footer />
    </div>
  );
}

export default App;
