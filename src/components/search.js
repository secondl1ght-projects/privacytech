import React from "react";
import brave from "../images/brave.jpg";
import ddg from "../images/ddg.jpg";

export default function Search() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="search">
        <button type="button" name="search" onClick={handleOnClick}>
          Search Engines
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="search">
        <h2>Search Engines</h2>
        <h3>Search privately</h3>
        <div class="box">
          <h4>
            <a
              href="https://search.brave.com/"
              target="_blank"
              rel="noreferrer"
            >
              Brave Search
            </a>
          </h4>
          <img src={brave} alt="Brave logo" />
          <p>
            Still in beta but Brave Search is a search engine from the awesome
            company Brave. They are building out an entire suite of privacy
            products to disrupt industries and this is one of them.
          </p>
        </div>
      </div>
    );
  }
}
