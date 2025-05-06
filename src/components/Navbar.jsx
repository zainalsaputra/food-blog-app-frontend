import React, { useEffect } from "react";
import Modal from "./Modal";
import InputForm from "./InputForm";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let token = localStorage.getItem("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(token ? false : true);

  useEffect(() => {
    setIsLoggedIn(token ? false : true);
  }, [token]);

  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      setIsLoggedIn(true);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => isLoggedIn && setIsOpen(true)}
              to={!isLoggedIn ? "/myrecipe" : "/"}
            >
              MyRecipes
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => isLoggedIn && setIsOpen(true)}
              to={!isLoggedIn ? "/favrecipe" : "/"}
            >
              Favourites
            </NavLink>
          </li>
          <li>
            <a className="login" onClick={checkLogin}>
              {isLoggedIn ? "Login" : "Logout"}
            </a>
          </li>
        </ul>
      </header>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}
