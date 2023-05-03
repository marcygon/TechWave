import React from 'react'
import './Navbar.scss'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { AiFillFire, AiOutlineQuestion, AiOutlineBook, AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';
import { useMediaQuery } from "@material-ui/core";

function Navbar() {
  
  const isMobile = useMediaQuery("(max-width:1100px)");
  const [navToggle, setNavToggle] = useState(false);

  const handleBurgerClick = () => {
    setNavToggle(true);
  };
  const handleCrossClick = () => {
    setNavToggle(false);
  };


  return (
    <>
    {isMobile ? (
        <>
          <RxHamburgerMenu id="burguerIcon" onClick={handleBurgerClick} />
          {navToggle && (
            <nav id="navbar">
              <RxCross1 id="crossIcon" onClick={handleCrossClick} />
              <div className="left">
                <li className="navbarLi">
                  <AiFillFire className="navbarIcons" />EVENTS
                </li>
                <li className="navbarLi">
                  <AiOutlineQuestion className="navbarIcons" />ABOUT
                </li>
                <li className="navbarLi">
                  <AiOutlineBook className="navbarIcons" />OUR STORY
                </li>
              </div>
              <div className="right">
                <li className="navbarLi">
                  <AiOutlineUser className="navbarIcons" />ACCOUNT
                </li>
              </div>
            </nav>
          )}
        </>
      ) : (
        <nav id="navbar">
          <div className="left">
            <li className="navbarLi">
              <AiFillFire className="navbarIcons" />EVENTS
            </li>
            <li className="navbarLi">
              <AiOutlineQuestion className="navbarIcons" />ABOUT
            </li>
            <li className="navbarLi">
              <AiOutlineBook className="navbarIcons" />OUR STORY
            </li>
          </div>
          <div className="right">
            <li className="navbarLi">
              <AiOutlineUser className="navbarIcons" />ACCOUNT
            </li>
          </div>
        </nav>
      )}
    </>
  );
}
    {/* <RxHamburgerMenu id='burguerIcon' onClick={handleBurgerClick}/>
    {navToggle && (
        <nav id="navbar">
          <RxCross1 id="crossIcon" onClick={handleCrossClick} />
          <div className="left">
            <li className="navbarLi">
              <AiFillFire className="navbarIcons" />EVENTS
            </li>
            <li className="navbarLi">
              <AiOutlineQuestion className="navbarIcons" />ABOUT
            </li>
            <li className="navbarLi">
              <AiOutlineBook className="navbarIcons" />OUR STORY
            </li>
          </div>
          <div className="right">
            <li className="navbarLi">
              <AiOutlineUser className="navbarIcons" />ACCOUNT
            </li>
          </div>
        </nav>
      )}
    </>
  )
} */}

export default Navbar
