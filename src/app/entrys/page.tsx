"use client";
import Entrys from "../components/Entrys";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarAdm from "../components/NavBarAdm";
import withAuth from "../withAuth";

const EntrysPage: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBarAdm />
      <Entrys />
      <Footer />
    </div>
  );
};

export default withAuth(EntrysPage);
