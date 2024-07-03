import React from "react";

const MenuArticle = ({ title, content, onClick }) => {
  return (
    <article className="category" onClick={onClick}>
      <img src={content} />
      <h2>{title}</h2>
    </article>
  );
};

export default MenuArticle;
