import React from "react";
import protonvpn from "../images/protonvpn.png";
import mullvad from "../images/mullvad.png";

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
            <a href="https://mullvad.net/" target="_blank" rel="noreferrer">
              Mullvad VPN
            </a>
          </h4>
          <img src={mullvad} alt="Mullvad VPN logo" />
          <p>
            Mullvad is a great VPN option offering a super easy sign-up process.
            In fact, there is no real sign-up required. You can pay via bitcoin
            if you want and no further information is needed. You are generated
            your own unique account identifier to give you access to your
            tunnels.
          </p>
        </div>

        <div class="box">
          <h4>
            <a href="https://protonvpn.com/" target="_blank" rel="noreferrer">
              ProtonVPN
            </a>
          </h4>
          <img src={protonvpn} alt="ProtonVPN logo" />
          <p>
            ProtonVPN will block websites from tracking your IP address to
            reveal your identity, it will also hide your network traffic from
            your ISP. But it will be visible to the VPN provider, however Proton
            states they do not keep logs.
          </p>
        </div>
      </div>
    );
  }
}
