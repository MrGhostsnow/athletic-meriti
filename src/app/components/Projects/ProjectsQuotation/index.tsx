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

const apiUrl = "https://back-athletic.onrender.com";

const ProjectsQuotation: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [quotation, setQuotation] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResponse, quotationsResponse] = await Promise.all([
          axios.get(`${apiUrl}/projetos`),
          axios.get(`${apiUrl}/quotacoes`),
        ]);

        setProjects(projectsResponse.data);
        setQuotation(quotationsResponse.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ContainerProjectQuotation>
      <TitleProjectQuotation>PROJETOS E COTAÇÕES</TitleProjectQuotation>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {projects.length === 0 && quotation.length === 0 ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <p style={{ fontSize: "24px" }}>
                Nenhum projeto ou cotação encontrado
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </ContainerProjectQuotation>
  );
};

export default ProjectsQuotation;
