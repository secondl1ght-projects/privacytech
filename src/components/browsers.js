import React from "react";
import brave from "../images/brave.jpg";
import tor from "../images/tor.jpg";
import bromite from '../images/bromite.png';

export default function Browsers() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="browsers">
        <button type="button" name="browsers" onClick={handleOnClick}>
          Web Browsers
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="browsers">
        <h2>Web Browsers</h2>
        <h3>Browse the web safely and privately</h3>
        <div class="box">
          <h4>
            <a href="https://brave.com/" target="_blank" rel="noreferrer">
              Brave Browser
            </a>
          </h4>
          <img src={brave} alt="Brave logo" />
          <p>
            Brave are the leaders in private web browsing. The browser is very
            feature rich for advanced users but comes with privacy by default
            for non-technical users as well. They have integrated optional Tor
            and IPFS support that is as easy as a click of a button. Users can
            also opt-in to privacy respecting advertising and receive Basic
            Attention Tokens in return. These tokens can be used to send tips to
            websites and content creators or to cash out at a cryptocurrency
            exchange.
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://www.torproject.org/" target="_blank" rel="noreferrer">
              Tor Browser
            </a>
          </h4>
          <img src={tor} alt="Tor logo" />
          <p>
            Tor is likely the most private way to browse the internet. Not only
            will you be protected from ads and tracking but your IP address will
            also be shielded from websites you visit, giving you greater
            anonymity. In addition to that, even your ISP will not see your
            network traffic because it is routed through multiple nodes before
            reaching the destination. Tor is a non-profit and is used by many
            people worldwide who's lives depend on privacy. If you enjoy the
            service or just want to support human rights, please consider
            donating to the Tor Project.
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://www.bromite.org/" target="_blank" rel="noreferrer">
              Bromite
            </a>
          </h4>
          <img src={bromite} alt="Bromite logo" />
          <p>
            Bromite is a good mobile-only option and available on F-Droid.
          </p>
        </div>
      </div>
    );
  }
}
