import React from "react";
import proton from "../images/proton.jpg";

export default function Email() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="email">
        <button type="button" name="email" onClick={handleOnClick}>
          Email
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="email">
        <h2>Private Emails</h2>
        <h3>Secure correspondence</h3>
        <div class="box">
          <h4>
            <a href="https://protonmail.com/" target="_blank" rel="noreferrer">
              ProtonMail
            </a>
          </h4>
          <img src={proton} alt="ProtonMail logo" />
          <p>
            Secure and encrypted email based out of Switzerland, Proton offers a
            free and paid version of their service. This is an excellent
            alternative to Gmail which scans users emails to harvest and sell
            data. Emails will be end to end encrypted to other ProtonMail users
            or if you set a password to non-Proton users. There are many other
            useful features such as expiration times and more.
          </p>
        </div>
      </div>
    );
  }
}
