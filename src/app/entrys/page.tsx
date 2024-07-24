"use client";
import Entrys from "../components/Entrys";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarAdm from "../components/NavBarAdm";

const EntrysPage: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBarAdm />
      <Entrys />
      <Footer />
    </div>
  );
};

export default EntrysPage;
