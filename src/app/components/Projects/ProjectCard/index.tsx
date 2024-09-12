"use client";
import {
  Card,
  Header,
  SectionTitle,
  Title,
  Type,
  SectionStatus,
  Status,
  ToggleLink,
  Content,
  LeftSection,
  RightSection,
  Info,
  Description,
} from "./styles";
import { useState } from "react";
import { formatDate } from "@/app/utils/formatDate";
import Image from "next/image";

interface IProjectCardProps {
  proponente: string;
  fonteDeRecursos?: string;
  valorDoProjeto: number;
  status: string;
  inicio: Date;
  fim: Date;
  local?: string;
  numeroDeBeneficiarios?: number;
  modalidadeEManifestacao?: string;
  empresasParceiras?: string;
  descricao: string;
  imagem?: string;
  type?: "Projeto" | "Cotação";
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  proponente,
  fonteDeRecursos,
  valorDoProjeto,
  status,
  inicio,
  fim,
  local,
  numeroDeBeneficiarios,
  modalidadeEManifestacao,
  empresasParceiras,
  descricao,
  imagem,
  type,
}) => {
  const [showMore, setShowMore] = useState(true);

  return (
    <Card>
      <Header>
        <SectionTitle>
          <Title>{proponente}</Title>
          <Type>{type}</Type>
        </SectionTitle>
        <SectionStatus>
          <Status
            style={{
              backgroundColor: status === "aberto" ? "#77BD10" : "#686D66",
            }}
          >
            {status}
          </Status>
          <ToggleLink onClick={() => setShowMore(!showMore)}>
            {showMore ? "ver menos" : "ver mais"}
          </ToggleLink>
        </SectionStatus>
      </Header>
      {showMore && (
        <Content>
          <LeftSection>
            <Info>
              <strong>Proponente:</strong> {proponente}
            </Info>
            {type === "Projeto" && (
              <Info>
                <strong>Fonte de recursos:</strong> {fonteDeRecursos}
              </Info>
            )}

            <Info>
              <strong>Valor do projeto:</strong> R${valorDoProjeto}
            </Info>
            <Info>
              <strong>Período de execução:</strong>{" "}
              {`de ${formatDate(inicio)} a ${formatDate(fim)}`}
            </Info>
            {type === "Projeto" && (
              <>
                <Info>
                  <strong>Local:</strong> {local}
                </Info>
                <Info>
                  <strong>Nº de beneficiários:</strong> {numeroDeBeneficiarios}
                </Info>
                <Info>
                  <strong>Modalidade e manifestação:</strong>{" "}
                  {modalidadeEManifestacao}
                </Info>
                <Info>
                  <strong>Empresas parceiras:</strong> {empresasParceiras}
                </Info>
              </>
            )}
          </LeftSection>
          <RightSection>
            <Description>
              <strong>Descrição:</strong> {descricao}
            </Description>
            {imagem && (
              <div
                style={{ width: "100%", height: "300px", position: "relative" }}
              >
                <Image
                  src={imagem}
                  alt="Imagem do projeto"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
          </RightSection>
        </Content>
      )}
    </Card>
  );
};

export default ProjectCard;
