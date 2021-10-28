import React from "react";
import nitter from "../images/nitter.png";
import fritter from "../images/fritter.png";
import freetube from "../images/freetube.png";
import newpipe from "../images/newpipe.svg";
import cloud from "../images/cloud.png";
import biblio from "../images/biblio.svg";
import libreddit from "../images/libreddit.png";
import slide from "../images/slide.png";
import twire from "../images/twire.png";
import twidere from '../images/twidere.jpg';

export default function Social() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="social">
        <button type="button" name="social" onClick={handleOnClick}>
          Social Media
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="social">
        <h2>Social Media Frontends</h2>
        <h3>View from a distance</h3>
        <div class="box">
          <h4>
            <a href="https://nitter.net/" target="_blank" rel="noreferrer">
              Nitter
            </a>
          </h4>
          <img src={nitter} alt="Nitter logo" id="notcircle" />
          <p>
            For Twitter inside the web browser there is Nitter, you are able to
            view all the same information as the real thing.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://github.com/jonjomckay/fritter"
              target="_blank"
              rel="noreferrer"
            >
              Fritter
            </a>
          </h4>
          <img src={fritter} alt="Fritter logo" />
          <p>
            If you want a mobile app that allows you to follow accounts and have
            a feed, that's what Fritter does. It's awesome, you can have your
            own private Twitter feed.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://f-droid.org/en/packages/org.mariotaku.twidere/"
              target="_blank"
              rel="noreferrer"
            >
              Twidere
            </a>
          </h4>
          <img src={twidere} alt="Twidere logo" />
          <p>
            This open source Twitter app lets you have full functionality if you
            do have an account. You can still participate, but from a nice
            distance.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://tube.cadence.moe/"
              target="_blank"
              rel="noreferrer"
            >
              CloudTube
            </a>
          </h4>
          <img src={cloud} alt="Cloud logo" />
          <p>
            CloudTube is a private YouTube frontend inside the browser, you can
            even have subscriptions if you enable a cookie for it. Isn't it
            relaxing not having a page full of suggested videos?
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://freetubeapp.io/" target="_blank" rel="noreferrer">
              FreeTube
            </a>
          </h4>
          <img src={freetube} alt="FreeTube logo" />
          <p>
            FreeTube is a private desktop application for YouTube, it is my
            favorite and I personally use it every day. You can hide many
            annoying YT features to have a clean interface, you can also create
            profiles to categorize your subs.
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://newpipe.net/" target="_blank" rel="noreferrer">
              NewPipe
            </a>
          </h4>
          <img src={newpipe} alt="NewPipe logo" />
          <p>
            To complete the YT alternative stack, there is NewPipe for mobile.
            You now have no excuse to ditch Google. You can access YT privately
            via the browser, desktop or mobile. Happy watching!
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://bibliogram.art/" target="_blank" rel="noreferrer">
              Bibliogram
            </a>
          </h4>
          <img src={biblio} alt="Bibliogram logo" id="notcircle" />
          <p>
            A browser based frontend for IG. You can use an RSS reader to create
            a feed for yourself, I personally use{" "}
            <a
              href="https://f-droid.org/en/packages/com.nononsenseapps.feeder/"
              target="_blank"
              rel="noreferrer"
              id="normal"
            >
              Feeder
            </a>
            .
          </p>
        </div>
        <div class="box">
          <h4>
            <a href="https://libredd.it/" target="_blank" rel="noreferrer">
              libreddit
            </a>
          </h4>
          <img src={libreddit} alt="libreddit logo" />
          <p>A private Reddit frontend in the browser.</p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://github.com/ccrama/Slide"
              target="_blank"
              rel="noreferrer"
            >
              Slide
            </a>
          </h4>
          <img src={slide} alt="Slide logo" />
          <p>
            A mobile frontend app for Reddit where you can actually sign into
            your account and have all the same functionality, minus the ads and
            tracking.
          </p>
        </div>
        <div class="box">
          <h4>
            <a
              href="https://f-droid.org/en/packages/com.perflyst.twire/"
              target="_blank"
              rel="noreferrer"
            >
              Twire
            </a>
          </h4>
          <img src={twire} alt="Twire logo" />
          <p>
            Ad-free and open-source Twitch mobile application available on
            F-Droid. You can sign into an account or watch as anonymously.
          </p>
        </div>
      </div>
    );
  }
}
