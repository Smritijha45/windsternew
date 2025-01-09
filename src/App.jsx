import React from "react";
import "./App.css";
import Code from "./components/Code";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-stone-100">
        <Code />
        <div className="ml-72 pr-2 mr-4">
          <List/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
