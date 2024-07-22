"use client";
import { ContainerProjectQuotation, TitleProjectQuotation } from "./styles";
import ProjectCard from "../ProjectCard";

const ProjectsQuotation: React.FC = () => {
  return (
    <ContainerProjectQuotation>
      <TitleProjectQuotation>PROJETOS E COTAÇÕES</TitleProjectQuotation>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ContainerProjectQuotation>
  );
};

export default ProjectsQuotation;
