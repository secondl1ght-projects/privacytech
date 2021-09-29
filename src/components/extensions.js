import React from "react";
import clear from "../images/clear.jpg";
import cookie from "../images/cookie.jpg";
import decentraleyes from "./images/decentraleyes.jpg";

export default function Extensions() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="extensions">
        <button type="button" name="extensions" onClick={handleOnClick}>
          Browser Extensions
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="extensions">
        <h2>Browser Extensions</h2>
        <h3>Harden your browser even further</h3>
        <div class="box">
          <h4>
            <a href="https://clearurls.xyz/" target="_blank" rel="noreferrer">
              ClearURLs
            </a>
          </h4>
          <img src={clear} alt="ClearURLs logo" />
          <p>
            Websites can add extra and unnecessary information to URLs in order
            to track you. This extensions clears all of that metadata giving you
            only the URL you actually require to surf the web.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://github.com/Cookie-AutoDelete/Cookie-AutoDelete"
              target="_blank"
              rel="noreferrer"
            >
              Cookie AutoDelete
            </a>
          </h4>
          <img src={cookie} alt="Cookie AutoDelete logo" />
          <p>
            We all hate cookies that follow you around the internet right? Well
            if you don't want to disable them entirely in your browser then you
            can add this extension and set the parameters for when you would
            like them to be removed.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://decentraleyes.org/"
              target="_blank"
              rel="noreferrer"
            >
              Decentraleyes
            </a>
          </h4>
          <img src={decentraleyes} alt="Decentraleyes logo" />
          <p>
            Protects you against tracking through "free", centralized, content
            delivery.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://www.eff.org/https-everywhere"
              target="_blank"
              rel="noreferrer"
            >
              HTTPS Everywhere
            </a>
          </h4>
          <img src={https} alt="HTTPS Everywhere logo" />
          <p>
            Brought to you by the good folks at the <a href='https://eff.org' rel='noreferrer' target="_blank" id='normal'>Electronic Frontier
            Foundation</a>, HTTPS Everywhere is essential. Some browsers have this
            available as a setting now but the extension is still a good add-on.
            There is really no excuse for a website to not have a certificate
            these days seeing as they are available for free from <a href='https://letsencrypt.org/' rel='noreferrer' target="_blank" id='normal'>Let's
            Encrypt!</a>. If you visit a website using HTTP instead of HTTPS that
            means any data you enter is wide open for the world to see, including
            credit card information. This extension will force all websites to
            use HTTPS.
          </p>
        </div>
      </div>
    );
  }
}
