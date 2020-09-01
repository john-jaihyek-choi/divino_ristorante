import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header";
import ExternalFooter from "./components/externalFooter/externalFooter";
import "./App.css";
import Landing from "./components/landing/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <ExternalFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
