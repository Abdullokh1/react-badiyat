import React, { useState } from "react";
import "./Header.scss";
import mainLogo from "../../assets/img/main-logo.svg";
import HeaderNav from "./HeaderNav/HeaderNav";
import { Link } from "react-router-dom";
import Wishlist from "../Wishlist/Wishlist";

export default function Header() {

  let [isClicked, setClick] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <a href="#">
              <img src={mainLogo} alt="main-logo" width="96" height="36" />
            </a>
          </div>
          <div className="d-flex align-items-center">
            <div className="header__nav__wrapper">
              <HeaderNav />
            </div>

            <div className="header__modal__wrap">
              <button
                onClick={() => setClick(!isClicked)}
                className="d-flex header__user__btn align-items-center"
              >
                <img
                  className="header__avatar me-1"
                  src="https://i.pinimg.com/550x/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.jpg"
                  alt="userAvatar"
                  width="50"
                  height="50"
                />
                <i className="bx bx-chevron-down"></i>
              </button>

              <div
                style={{ opacity: isClicked ? "1" : "0" }}
                className="header__modal"
              >
                <ul className="list-unstyled header__modal__list m-0 p-0">
                  <li className="header__modal__item">
                    <Link to="/UserDashboard">
                      <p
                        onClick={() => setClick(!isClicked)}
                        className=" header__modal__link m-0 d-flex align-items-center"
                      >
                        <i className="bx header__user__icon me-2 bxs-user"></i>
                        Profile
                      </p>
                    </Link>
                  </li>
                  <li className="header__modal__item mb-0">
                    <Link to='/Edit'>
                      <p onClick={() => setClick(!isClicked)}
                         className="m-0 header__modal__link d-flex align-items-center">
                         <i className="bx header__user__icon me-2 bxs-cog"></i>
                         Edit
                      </p>
                    </Link>
                  </li>

                  <li className="header__modal__item">
                  
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"className=" header__modal__link d-flex align-items-center">
                      <i className="bx header__user__icon me-2 bxs-bookmark-star"></i>
                      Saved books
                    </button>
                  </li>
                  <Wishlist/>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
