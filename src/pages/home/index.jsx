import React from "react";
import BannerHome from "./components/BannerHome";
import CourseOverview from "./components/CourseOverview";
import ListKhoaHoc from "./components/ListKhoaHoc";
import StatsSection from "./components/StatsSection/StatsSection";
import ListGV from "./components/ListGV";
import ReviewStudent from "./components/ReviewStudent";

const HomePage = () => {
  return (
    <div>
      <BannerHome></BannerHome>
      <CourseOverview />
      <ListKhoaHoc />
      <StatsSection />
      <ListGV />
      <ReviewStudent />
    </div>
  );
};

export default HomePage;
