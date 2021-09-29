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
            <a href="https://duckduckgo.com/" target="_blank" rel="noreferrer">
              DuckDuckGo
            </a>
          </h4>
          <img src={ddg} alt="DDG logo" />
          <p>
            DuckDuckGo is my favorite search engine currently. The results are
            very good and it has all the same functionality you would expect
            including maps, contact information for businesses and conversion
            tools.
          </p>
        </div>
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
            Still in beta but worth a mention is a search engine from the
            awesome company Brave. They are building out an entire suite of
            privacy products to disrupt industries and this is one of them. I
            will personally be testing this out during the beta and may switch
            to it in the future.
          </p>
        </div>
      </div>
    );
  }
}
