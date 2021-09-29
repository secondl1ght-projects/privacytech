import React from "react";
import system76 from "../images/system76.jpg";

export default function Hardware() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="hardware">
        <button type="button" name="hardware" onClick={handleOnClick}>
          Hardware
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="hardware">
        <h2>Hardware</h2>
        <h3>Secure, private and open-source</h3>
        <div class="box">
          <h4>
            <a href="https://system76.com" target="_blank" rel="noreferrer">
              system76
            </a>
          </h4>
          <img src={system76} alt="system76 logo" />
          <p>
            system76 makes high quality, open-source Linux laptops. They come
            shipped with their distribution of Ubuntu called PopOS, which is a
            fantastic minimal option. Everything will work out of the box with
            impressive bootup speeds. There is no calling home happening with
            this OS. All levels of users will enjoy an incredible experience
            with this hardware/software stack, especially if you are coming from
            Windows. You will be left alone and not have your system
            automatically restart to force updates that you never asked for,
            every 2 days... The most basic option will be suitible for most
            users but if you need more power then they have options to customize
            your RAM and more.
          </p>
        </div>
      </div>
    );
  }
}
