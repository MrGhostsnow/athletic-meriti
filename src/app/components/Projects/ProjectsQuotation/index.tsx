"use client";
import { ContainerProjectQuotation, TitleProjectQuotation } from "./styles";
import ProjectCard from "../ProjectCard";
import axios from "axios";
import { useState, useEffect } from "react";

interface Project {
  _id: string;
  proponente: string;
  imagem: string;
  fonteDeRecursos: string;
  valorDoProjeto: number;
  status: string;
  inicio: Date;
  fim: Date;
  local: string;
  numeroDeBeneficiarios: number;
  modalidadeEManifestacao: string;
  empresasParceiras: string;
  descricao: string;
  type: "Projeto";
}

interface Quotation {
  _id: string;
  proponente: string;
  imagem: string;
  valorDoProjeto: number;
  status: string;
  inicio: Date;
  fim: Date;
  descricao: string;
  type: "Cotação";
}

const ProjectsQuotation: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [quotation, setQuotation] = useState<Quotation[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/projetos")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/quotacoes")
      .then((response) => {
        setQuotation(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  return (
    <ContainerProjectQuotation>
      <TitleProjectQuotation>PROJETOS E COTAÇÕES</TitleProjectQuotation>
      {projects.map((project) => (
        <ProjectCard
          proponente={project.proponente}
          type={project.type}
          imagem={project.imagem}
          key={project._id}
          fonteDeRecursos={project.fonteDeRecursos}
          valorDoProjeto={project.valorDoProjeto}
          status={project.status}
          inicio={project.inicio}
          fim={project.fim}
          local={project.local}
          numeroDeBeneficiarios={project.numeroDeBeneficiarios}
          modalidadeEManifestacao={project.modalidadeEManifestacao}
          empresasParceiras={project.empresasParceiras}
          descricao={project.descricao}
        />
      ))}

      {quotation.map((quotation) => (
        <ProjectCard
          proponente={quotation.proponente}
          type={quotation.type}
          imagem={quotation.imagem}
          key={quotation._id}
          valorDoProjeto={quotation.valorDoProjeto}
          status={quotation.status}
          inicio={quotation.inicio}
          fim={quotation.fim}
          descricao={quotation.descricao}
        />
      ))}
    </ContainerProjectQuotation>
  );
};

export default ProjectsQuotation;
