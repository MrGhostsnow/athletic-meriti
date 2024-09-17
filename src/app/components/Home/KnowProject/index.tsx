import {
  ContainerKnowProject,
  KnowTheProject,
  TitleKnowProject,
} from "./styles";

const KnowProject: React.FC = () => {
  return (
    <ContainerKnowProject>
      <KnowTheProject>CONHEÇA O ATHLETIC MERITI</KnowTheProject>
      <TitleKnowProject>
        O Athletic Meriti é uma Associação que transforma a vida de crianças e
        jovens carentes através do esporte, promovendo inclusão social, educação
        e cidadania.
      </TitleKnowProject>
    </ContainerKnowProject>
  );
};

export default KnowProject;
