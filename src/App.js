import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/header";
import PhoneIcon from "./components/phoneIcon/phoneIcon"
import ExternalFooter from "./components/externalFooter/externalFooter";
import "./App.css";
import Landing from "./components/landing/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <PhoneIcon />
        <ExternalFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
