import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Galery from "./components/Galery";
import Glossary from "./components/Glossary";

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Galery/>
      <Glossary/>
    </div>
  );
}

export default App;
