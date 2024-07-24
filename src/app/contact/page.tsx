"use client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ContactAddress from "../components/Contact/ContactAddress";

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
