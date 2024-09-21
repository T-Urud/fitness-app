import React from "react";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Classes from "../components/Classes";

const Profile = () => {
  const images = [
    `${process.env.PUBLIC_URL}/img/dumbell.webp`,
    `${process.env.PUBLIC_URL}/img/weightlifting.webp`,
    `${process.env.PUBLIC_URL}/img/gym.webp`,
  ];

  return (
    <div>
      <Header />
      <Menu />
      {/* <Carousel images={images} /> */}
      {/* add graph stats */}
      <Classes images={images} />
      <Navigation />
    </div>
  );
};

export default Profile;
