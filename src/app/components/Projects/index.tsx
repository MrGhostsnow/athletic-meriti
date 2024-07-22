"use client";
import Footer from "../Footer";
import NavBar from "../NavBar";
import ProjectsQuotation from "./ProjectsQuotation";

const Projects: React.FC = () => {
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
      <ProjectsQuotation />
      <Footer />
    </div>
  );
};

export default Projects;
