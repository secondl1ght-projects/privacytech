import React from "react";
import ReactDOM from "react-dom";
import Browsers from "./components/browsers";
import Extensions from "./components/extensions";
import Messaging from "./components/messaging";
import Tunnel from "./components/tunnel";
import Social from "./components/social";
import Search from "./components/search";
import Email from "./components/email";
import Operating from "./components/operating";
import Hardware from "./components/hardware";
import Stores from "./components/stores";
import Tips from './components/tips'
import "./App.css";

function App() {
  return (
    <>
      <Browsers />
      <Extensions  />
      <Messaging />
      <Tunnel />
      <Social />
      <Search />
      <Email />
      <Operating />
      <Hardware />
      <Stores />
      <Tips />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
