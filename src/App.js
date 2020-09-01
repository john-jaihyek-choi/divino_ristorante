import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </>
  );
}

export default App;