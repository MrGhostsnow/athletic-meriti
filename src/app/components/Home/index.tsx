"use client";
import Footer from "../Footer";
import Donate from "./Donate";
import KnowProject from "./KnowProject";
import OurMission from "./OurMission";
import TopPage from "./TopPage";

const HomePage: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <TopPage />
      <KnowProject />
      <OurMission />
      <Donate />
      <Footer />
    </div>
  );
};

export default HomePage;
