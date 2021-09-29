import React from "react";
import fdroid from "../images/fdroid.png";

export default function Stores() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="stores">
        <button type="button" name="stores" onClick={handleOnClick}>
          App Store
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="stores">
        <h2>App Store</h2>
        <h3>Free and open-source apps</h3>
        <div class="box">
          <h4>
            <a href="https://f-droid.org/" target="_blank" rel="noreferrer">
              F-Droid
            </a>
          </h4>
          <img src={fdroid} alt="F-Droid logo" id='notcircle'/>
          <p>
            F-Droid is your mobile app store that contains only free and
            open-source software. Free as in freedom.
          </p>
        </div>
      </div>
    );
  }
}
