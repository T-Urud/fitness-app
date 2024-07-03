import React from "react";
import Navigation from "../components/Navigation";

const Friends = () => {
  return (
    <section>
      <h1>Say hi your gym bros !</h1>
      <div className="socialContainer">
        <h2>Invite your friends to join the movement !</h2>
        <div className="socialApp">
          <a href="https://www.facebook.com" target="_blank">
            <img src="./img/icons/facebook.svg" alt="facebook logo" />
          </a>
          <a href="https://x.com/" target="_blank">
            <img src="./img/icons/twitter.svg" alt="twitter logo" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="./img/icons/instagram.svg" alt="instagram logo" />
          </a>
          <a href="https://www.whatsapp.com/" target="_blank">
            <img src="./img/icons/whatsapp.svg" alt="whatsapp logo" />
          </a>
        </div>
      </div>
      <Navigation />
    </section>
  );
};

export default Friends;
