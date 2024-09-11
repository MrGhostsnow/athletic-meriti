import {
  ContainerTeamHistory,
  TitleTeamHistory,
  ContainerContent,
  TextContent,
  SectionImage,
  VectorImg,
} from "./styles";
import Image from "next/image";

import player4 from "../../../assets/player4.png";
import player5 from "../../../assets/player5.png";
import donate from "../../../assets/donate.png";
import coach from "../../../assets/coach.png";
import ChooseDonate from "../ChooseDonate";

const TeamHistory: React.FC = () => {
  return (
    <ContainerTeamHistory>
      <TitleTeamHistory>SEJA UM DOADOR</TitleTeamHistory>
      <ContainerContent>
        <TextContent>
          O Athletic Meriti, clube desportivo de basquete localizado em São João
          de Meriti/Rio de Janeiro, é uma organização não governamental dedicada
          a transformar a vida de crianças e jovens carentes da comunidade.
          <br />
          <br />
          <strong>
            Através do basquete, o clube promove a qualidade de vida,
            incentivando hábitos saudáveis, disciplina e trabalho em equipe.
          </strong>
          <br />
          <br />
          Sua contribuição financeira é essencial para manter este projeto vital
          em funcionamento. Com sua doação, o Athletic Meriti poderá continuar
          oferecendo treinamento, suporte educacional e um ambiente seguro e
          estimulante para esses jovens.
          <br />
          <br />
          <strong>
            Junte-se a nós nessa missão de esperança e transformação. Doe hoje e
            ajude a construir um futuro melhor!
          </strong>
        </TextContent>
        <SectionImage>
          <VectorImg>
            <Image src={donate} alt="player" width={730} height={960} />
            {/* <Image
              src={player5}
              alt="player"
              width={530}
              height={570}
              style={{ position: "relative", top: "-200px", left: "-70px" }}
            />
            <Image
              src={coach}
              alt="coach"
              width={350}
              height={350}
              style={{ position: "relative", top: "-320px", left: "100px" }}
            />
            <Image
              src={player4}
              alt="player"
              width={500}
              height={600}
              style={{ position: "relative", top: "-690px", left: "-105px" }}
            /> */}
          </VectorImg>
        </SectionImage>
      </ContainerContent>
      <ChooseDonate />
    </ContainerTeamHistory>
  );
};

export default TeamHistory;
