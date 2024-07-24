"use client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TeamHistory from "../components/BeADonor/TeamHistory";

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
