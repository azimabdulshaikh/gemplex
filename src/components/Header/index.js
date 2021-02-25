import React from "react";
import "./styles.scss";
import GemplexLogo from './GemplexLogo.png';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const Header = () => {
  return (
    <div className="header">
      <div className="iconDiv">
        <img src={GemplexLogo} alt="" className="primeIcon" />
      </div>
      <div>
        <div className="navBarDiv">
          <div className="navLinks">
            <a href="/">
              <div className="textLink">Originals</div>
            </a>
          </div>
          <div className="navLinks">
              <div className="textLink">Movies</div>
          </div>
          <div className="navLinks">
            <a href="/movies">
              <div className="textLink">Videos</div>
            </a>
          </div>
          <div className="navLinks">
            <a href="/movies">
              <div className="textLink">Music</div>
            </a>
          </div>
          <div className="navLinks">
            <a href="/movies">
              <div className="textLink">Hype</div>
            </a>
          </div>
        </div>
      </div>

      <div className="headerAlignEnd">
        <div className="inputOuterDiv">
          <div className="inputDiv">
            <div>
              <SearchOutlinedIcon className="searchIcon" />
            </div>
            <div>
              <input type="text" className="inputBox" placeholder="Search" />
            </div>
          </div>
        </div>
        <div>
          <button className="account" fontSize="large">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
