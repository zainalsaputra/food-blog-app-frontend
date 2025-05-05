import React, { use } from "react";
import { useLoaderData } from "react-router-dom";
import { IoMdStopwatch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

import foodImg from "../assets/foodRecipe.png";

export default function RecipeItems() {
  const allRecipes = useLoaderData();
  console.log(allRecipes);
  return (
    <>
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={foodImg}
                alt={item.title}
                width="120px"
                height="100px"
              ></img>
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer"><IoMdStopwatch/> 30 min</div>
                  <FaRegHeart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
