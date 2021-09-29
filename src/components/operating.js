import React from "react";
import lineage from "../images/lineage.jpg";
import system76 from '../images/system76.jpg';

export default function Operating() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="operating">
        <button type="button" name="operating" onClick={handleOnClick}>
          Operating Systems
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="operating">
        <h2>Operating Systems</h2>
        <h3>Privacy focused OS</h3>
        <div class="box">
          <h4>
            <a href="https://lineageos.org/" target="_blank" rel="noreferrer">
              LineageOS
            </a>
          </h4>
          <img src={lineage} alt="LineageOS logo" />
          <p>
            If you use an Apple device you should switch to Android, as Apple
            has now openly admitted to scanning users devices. If you use
            Android already then you should use a custom OS that is de-Googled.
            There are a few options out there including Graphene and Calyx but
            both of those requiring using a Pixel device. I find it a bit
            weird to buy a device from the company you are trying to avoid... So
            that is why I recommend LineageOS. It has a large contributor
            community and is available for many different mobile phones. You
            will need a bit of tech skills in order to flash this to your phone,
            but if you need help just ask the most techy person you know. The
            online guide is pretty straightforward though. Having software that
            you control on a device that you paid for is the way it should work.
            No more bloatware, spyware or forced auto-updates containing
            who-knows-what. You can breathe a sigh of relief knowing that you
            have now kicked surveillance tech to the curb, for real.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://pop.system76.com/"
              target="_blank"
              rel="noreferrer"
            >
              PopOS
            </a>
          </h4>
          <img src={system76} alt="system76 logo" />
          <p>
            If you don't want to spend the money and buy a Linux laptop you can
            just flash PopOS onto whatever existing laptop you have. This will
            again take a bit of technical knowledge but it is not too hard.
            PopOS is a great operating system that is privacy respecting and
            blazing fast because of this.
          </p>
        </div>
      </div>
    );
  }
}
