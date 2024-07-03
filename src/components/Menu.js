import React from "react";
import MenuArticle from "./MenuArticle";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="grid grid-cols-[48.5%_48.5%] gap-[3%] mb-6 px-4">
      <MenuArticle
        title={"Exercices"}
        content={"./img/icons/dumbell-fitness-svgrepo-com.svg"}
        onClick={() => handleClick("exercices")}
      />
      <MenuArticle
        title={"Streaching"}
        content={"./img/icons/buddhist-yoga-pose-svgrepo-com.svg"}
      />
      <MenuArticle
        title={"Food"}
        content={"./img/icons/healthy-food-svgrepo-com.svg"}
      />
      <MenuArticle
        title={"Award"}
        content={"./img/icons/sports-trophy-cup-svgrepo-com.svg"}
      />
    </div>
  );
};

export default Menu;
