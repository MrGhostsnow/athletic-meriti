"use client";
import {
  Card,
  Header,
  Title,
  Type,
  Status,
  ToggleLink,
  Content,
  LeftSection,
  RightSection,
  Info,
  Description,
} from "./styles";
import { useState } from "react";

const ProjectCard: React.FC = () => {
  const [showMore, setShowMore] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "60%",
            gap: "10rem",
          }}
        >
          <Title>Campeões do futuro</Title>
          <Type>Projeto</Type>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "40%",
            justifyContent: "space-around",
            gap: "10px",
          }}
        >
          <Status style={{ backgroundColor: isOpen ? "#77BD10" : "#686D66" }}>
            {isOpen ? "ABERTO" : "ENCERRADO"}
          </Status>
          <ToggleLink onClick={() => setShowMore(!showMore)}>
            {showMore ? "ver menos" : "ver mais"}
          </ToggleLink>
        </div>
      </Header>
      {showMore && (
        <Content>
          <LeftSection>
            <Info>
              <strong>Proponente:</strong> Projeto Campeões do futuro
            </Info>
            <Info>
              <strong>Fonte de recursos:</strong> xyzxyzxyzxyz
            </Info>
            <Info>
              <strong>Valor do projeto:</strong> R$ 10.000,00
            </Info>
            <Info>
              <strong>Período de execução:</strong> de 17/08/2020 a 17/08/2024
            </Info>
            <Info>
              <strong>Local:</strong> Meriti/RJ
            </Info>
            <Info>
              <strong>Nº de beneficiários:</strong> 1500 alunos e não alunos
            </Info>
            <Info>
              <strong>Modalidade e manifestação:</strong> a partir de 12 anos
            </Info>
            <Info>
              <strong>Empresas parceiras:</strong> NFL Júnior e RED BULL
            </Info>
          </LeftSection>
          <RightSection>
            <Description>
              <strong>Descricão:</strong> Neste projeto trabalharemos a boa
              relação entre competição e estratégia com jovens da periferia.
            </Description>
            {/* Espaço reservado para imagem ou conteúdo adicional */}
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#f0f0f0",
              }}
            ></div>
          </RightSection>
        </Content>
      )}
    </Card>
  );
};

export default ProjectCard;
