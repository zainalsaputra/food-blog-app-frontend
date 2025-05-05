import React from "react";
import foodRecipe from "../assets/foodRecipe.png";
import RecipeItems from "../components/RecipeItems";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </h5>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img src={foodRecipe} width="320px" height="300px" />
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,128L21.8,117.3C43.6,107,87,85,131,101.3C174.5,117,218,171,262,160C305.5,149,349,75,393,58.7C436.4,43,480,85,524,106.7C567.3,128,611,128,655,128C698.2,128,742,128,785,144C829.1,160,873,192,916,202.7C960,213,1004,203,1047,213.3C1090.9,224,1135,256,1178,245.3C1221.8,235,1265,181,1309,138.7C1352.7,96,1396,64,1418,48L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="recipe">
        <RecipeItems />
      </div>
    </>
  );
}
