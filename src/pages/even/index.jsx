import React from "react";
import SlideEven from "./components/SlideEven";
import EvenDetail from "./components/EvenDetail";
import ListDetail from "./components/ListDetail";
import Donor from "./components/Donor";

const EvenPage = () => {
  return (
    <div>
      <SlideEven />
      <EvenDetail />
      <ListDetail />
      <Donor />
    </div>
  );
};

export default EvenPage;
