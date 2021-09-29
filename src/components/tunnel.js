import React from "react";
import protonvpn from "../images/protonvpn.png";

export default function Tunnel() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="tunnel">
        <button type="button" name="tunnel" onClick={handleOnClick}>
          VPN
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="tunnel">
        <h2>VPN</h2>
        <h3>Secure your network traffic</h3>
        <div class="box">
          <h4>
            <a href="https://protonvpn.com/" target="_blank" rel="noreferrer">
              ProtonVPN
            </a>
          </h4>
          <img src={protonvpn} alt="ProtonVPN logo" />
          <p>
            ProtonVPN will block websites from tracking your IP
            address to reveal your identity, it will also hide your network traffic from your ISP. But
            it will be visible to the VPN provider, however Proton states they
            do not keep logs.
          </p>
        </div>
      </div>
    );
  }
}
