import {
  ContainerDonate,
  SectionDonate,
  TextDonate,
  TitleDonate,
  DescriptionDonate,
  SectionButtonDonate,
  ButtonDonate,
} from "./styles";
import Image from "next/image";
import atlhetic from "../../../assets/atlhetic.png";

const Donate: React.FC = () => {
  return (
    <ContainerDonate>
      <SectionDonate>
        <TextDonate>
          <TitleDonate>DEIXE O BASQUETE MUDAR A SUA VIDA TAMBÉM</TitleDonate>
          <DescriptionDonate>
            JUNTE-SE AO ATHLETIC MERITI E SINTA O PODER DO ESPORTE
          </DescriptionDonate>
        </TextDonate>
        <SectionButtonDonate>
          <ButtonDonate style={{ backgroundColor: "#F24405" }}>
            AGENDE SUA AULA
          </ButtonDonate>
          <ButtonDonate style={{ backgroundColor: "#ACF213" }}>
            FAÇA UMA DOAÇÃO
          </ButtonDonate>
        </SectionButtonDonate>
      </SectionDonate>
      <Image
        src={atlhetic}
        alt="Logo"
        width={1200}
        height={509}
        style={{ position: "absolute", top: "230px", left: "120px" }}
      />
    </ContainerDonate>
  );
};

export default Donate;
