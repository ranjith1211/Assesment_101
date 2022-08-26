import React from "react";
import { Routes, Route } from "react-router-dom";

import { FoodList } from "./FoodList";

import { SingleItem } from "./SingleItem";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FoodList />}></Route>
        <Route path="/:Id" element={<SingleItem />}></Route>
      </Routes>
    </div>
  );
};
