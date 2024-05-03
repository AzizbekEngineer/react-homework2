import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Product from "./components/product/Product";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Service />
      <About />
      <Product />
    </Fragment>
  );
}

export default App;
