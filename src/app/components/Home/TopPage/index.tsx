"use client";
import {
  ContainerTopPage,
  SectionHeaderPage,
  NamePage,
  DescriptionPage,
  ButtonPage,
} from "./styles";
import NavBar from "../../NavBar";

const TopPage: React.FC = () => {
  return (
    <ContainerTopPage>
      <NavBar />
      <SectionHeaderPage>
        <NamePage>ATHLETIC MERITI</NamePage>
        <DescriptionPage>
          ONDE JOGAR BASQUETE FAZ TODA A DIFERENÇA
        </DescriptionPage>
        <ButtonPage>FAÇA PARTE DO TIME</ButtonPage>
      </SectionHeaderPage>
    </ContainerTopPage>
  );
};

export default TopPage;
