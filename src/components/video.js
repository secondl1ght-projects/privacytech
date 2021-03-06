import React from "react";
import brave from "../images/brave.jpg";
import jitsi from "../images/jitsi.jpg";

export default function Video() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="video">
        <button type="button" name="video" onClick={handleOnClick}>
          Video Calls
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="email">
        <h2>Video calls and conferencing</h2>
        <h3>Private connections</h3>
        <div class="box">
          <h4>
            <a href="https://jitsi.org/" target="_blank" rel="noreferrer">
              Jitsi
            </a>
          </h4>
          <img src={jitsi} alt="Jitsi logo" />
          <p>
            The #1 choice for open source and privacy respecting video calls.
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://talk.brave.com/" target="_blank" rel="noreferrer">
              Brave Talk
            </a>
          </h4>
          <img src={brave} alt="Brave logo" />
          <p>
            Video calls and conferencing, except with privacy. No more Zoom,
            ever.
          </p>
        </div>
      </div>
    );
  }
}
