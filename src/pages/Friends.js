import React from "react";
import Header from "../components/Header";

const Friends = () => {
  return (
    <div>
      <Header />
      <section className="h-screen">
        <div className="h-full grid place-content-center gap-4">
          <h1 className="font-bold text-3xl">Say hi to your gym bros !</h1>
          <div className="bg-white p-2 mx-4 rounded-xl">
            <h2 className="text-center mb-3">
              Invite your friends to join the movement !
            </h2>
            <div className="flex">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="w-full h-10 "
              >
                <img
                  src="./img/icons/facebook.svg"
                  alt="facebook logo"
                  className="w-full h-full cursor-pointer"
                />
              </a>
              <a href="https://x.com/" target="_blank" className="w-full h-10 ">
                <img
                  src="./img/icons/twitter.svg"
                  alt="twitter logo"
                  className="w-full h-full cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-full h-10 "
              >
                <img
                  src="./img/icons/instagram.svg"
                  alt="instagram logo"
                  className="w-full h-full cursor-pointer"
                />
              </a>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                className="w-full h-10 "
              >
                <img
                  src="./img/icons/whatsapp.svg"
                  alt="whatsapp logo"
                  className="w-full h-full cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Friends;
