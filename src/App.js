import React from "react";

import {
  Aboutus,
  Chef,
  Findus,
  Footer,
  Gallary,
  Laurels,
  Header,
  Intro,
  SpecialMenu,
} from "./container";

import { Navbar } from "./components";

import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      <Header />

      <Aboutus />

      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallary />
      <Findus />
      <Footer />
    </div>
  );
}

export default App;
