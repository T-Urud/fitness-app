import React from "react";

const Header = () => {
  return (
    <header>
      <div className="userContainer">
        <div className="profilePic">
          <img src="./black-screen.png" alt="profile pic" />
        </div>
        <div className="profileInfos">
          <h1>Theo Main</h1>
          <p>Reached goals: 5</p>
        </div>
      </div>
      <div className="hideMenuContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>{" "}
      </div>
    </header>
  );
};

export default Header;
