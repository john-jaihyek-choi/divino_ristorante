import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./App.css";
import "./components/externalFooter/externalFooter";
import ExternalFooter from "./components/externalFooter/externalFooter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Header} />
      </BrowserRouter>
    </>
  );
}

export default App;
