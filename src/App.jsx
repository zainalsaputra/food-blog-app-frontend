import React from "react";
import axios from "axios";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import MainNavigation from "./components/MainNavigation";
import ErrorPage from "./pages/ErrorPage";
import AddFoodRecipes from "./pages/AddFoodRecipes";

// const getAllRecipes = async () => {
//   const response = await fetch(
//     "https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&query=pasta"
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch recipes");
//   }
//   const data = await response.json();
//   return data.results;
// }

const getAllRecipes = async () => {
  const allRecipes = [];
  await axios
    .get(`${import.meta.env.VITE_API_URL}/recipes`)
    .then((response) => {
      const recipes = response.data;
      recipes.forEach((recipe) => {
        allRecipes.push(recipe);
      });
    });
  return allRecipes;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      { path: "/", element: <Home />, loader: getAllRecipes },
      { path: "/myrecipe", element: <Home /> },
      { path: "/favrecipe", element: <Home /> },
      { path: "/addrecipe", element: <AddFoodRecipes /> },
    ],
    // errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  );
}
