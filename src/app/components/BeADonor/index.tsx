"use client";
import Footer from "../Footer";
import NavBar from "../NavBar";
import TeamHistory from "./TeamHistory";

const BeADonor: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <NavBar color="#fff" bgNavBar />
      <TeamHistory />
      <Footer />
    </div>
  );
};

export default BeADonor;
