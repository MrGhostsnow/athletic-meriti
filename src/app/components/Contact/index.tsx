"use client";
import Footer from "../Footer";
import NavBar from "../NavBar";
import ContactAddress from "./ContactAddress";

const Contact: React.FC = () => {
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
      <ContactAddress />
      <Footer />
    </div>
  );
};

export default Contact;
