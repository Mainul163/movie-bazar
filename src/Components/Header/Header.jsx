import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../../images/user-image/user.jpg (1).png";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"> Movie App</div>
      </Link>
      <div className="user-image">
        <img src={UserImage} alt="user" />
      </div>
    </div>
  );
};

export default Header;
