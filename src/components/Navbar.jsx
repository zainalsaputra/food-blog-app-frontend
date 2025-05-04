import React from "react";

export default function Navbar() {
  return (
    <>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a class="login" href="#">
              Login
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
