"use client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NavBarAdm from "../components/NavBarAdm";
import Form from "../components/NewProject/Form";

const NewProject: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBarAdm />
      <Form />
      <Footer />
    </div>
  );
};

export default NewProject;
