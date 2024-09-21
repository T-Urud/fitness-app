import React from "react";

const MenuArticle = ({ title, content, onClick }) => {
  return (
    <article className="flex items-center cursor-pointer" onClick={onClick}>
      <img src={content} />
      <h2 className="text-lg font-semibold">{title}</h2>
    </article>
  );
};

export default MenuArticle;
