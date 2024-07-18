"use client";
import KnowProject from "./KnowProject";
import OurMission from "./OurMission";
import TopPage from "./TopPage";

const HomePage: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <TopPage />
      <KnowProject />
      <OurMission />
    </div>
  );
};

export default HomePage;
