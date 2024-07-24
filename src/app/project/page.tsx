"use client";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProjectsQuotation from "../components/Projects/ProjectsQuotation";

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
