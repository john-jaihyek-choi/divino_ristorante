import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import ExternalFooter from "./components/externalFooter/externalFooter";
import Landing from "./components/landing/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={ExternalFooter} />
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </>
  );
}

export default App;
