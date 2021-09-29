import React from "react";
import signal from "../images/signal.jpg";
import matrix from '../images/matrix.jpg';

export default function Messaging() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="messaging">
        <button type="button" name="messaging" onClick={handleOnClick}>
          Messaging
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="hardware">
        <h2>Messaging</h2>
        <h3>Encrypted communication</h3>
        <div class="box">
          <h4>
            <a href="https://www.signal.org/" target="_blank" rel="noreferrer">
              Signal
            </a>
          </h4>
          <img src={signal} alt="Signal logo" />
          <p>
            Did you know that all of your text messages are sent un-encrypted?
            That is unacceptable. Signal provides an easy to use mobile or
            desktop app that will automatically import your contacts, messages
            and set as your default SMS application. When you message other
            Signal users your communication will be end to end encrypted, the
            way it should be.
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://matrix.org/" target="_blank" rel="noreferrer">
              Matrix
            </a>
          </h4>
          <img src={matrix} alt="Matrix logo" />
          <p>
            Matrix provides secure AND decentralized communication using the IRC
            protocol on the backend with an easy to use interface on the
            frontend. This platform is great for online communities.
          </p>
        </div>
      </div>
    );
  }
}
