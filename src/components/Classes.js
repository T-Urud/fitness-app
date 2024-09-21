import React from "react";

const Classes = ({ images }) => {
  return (
    <section>
      <div className="max-h-[200px] max-w-[calc(100%-30px)] w-full m-auto">
        <img
          src={images[0]}
          alt=""
          className="h-full w-full object-contain max-h-[200px]"
        />
      </div>
    </section>
  );
};

export default Classes;
