import {
  ContainerOurMission,
  SectionImg,
  SectionInfo,
  SectionInfoWork,
  SectionText,
  Text,
  Title,
  SectionPartner,
  Label,
  SpanHowWeWork,
} from "./styles";
import Image from "next/image";
import player1 from "../../../assets/player1.png";
import player2 from "../../../assets/player2.png";
import player3 from "../../../assets/player3.png";
import team from "../../../assets/team.png";
import team2 from "../../../assets/team2.png";
import team3 from "../../../assets/team3.png";
import coachs from "../../../assets/coachs.png";
import shellLogo from "../../../assets/shell-logo.png";
import saoFranciscoLogo from "../../../assets/saofrancisco-logo.png";
import useWindowSize from "../../../hooks/useWindowSize";

const OurMission: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <ContainerOurMission>
      <SectionInfo className="first-info">
        <SectionText>
          <Title>NOSSA MISSÃO</Title>
          <Text>
            Promover a inclusão social e o desenvolvimento integral de crianças
            e jovens carentes da comunidade através do basquete, proporcionando
            um ambiente seguro e estimulante que incentive a prática esportiva,
            a educação e a cidadania.
          </Text>
        </SectionText>
        <SectionImg style={{ background: "#EBC026" }}>
          <Image
            src={player1}
            alt="player"
            width={width > 700 ? 380 : 280}
            height={width > 700 ? 430 : 330}
            style={{
              position: "relative",
              top: "-20px",
              left: width > 700 ? "160px" : "50px",
            }}
          />
          <Image
            src={player2}
            alt="player"
            width={380}
            height={430}
            style={{
              position: "relative",
              top: width > 700 ? "-80px" : "-65px",
              left: width > 700 ? "60px" : "-20px",
            }}
          />
          {width > 700 && (
            <Image
              src={player3}
              alt="player"
              width={380}
              height={430}
              style={{ position: "relative", top: "-80px", left: "-175px" }}
            />
          )}
        </SectionImg>
      </SectionInfo>
      <SectionInfo className="column-reverse">
        <SectionImg style={{ background: "#77BD10" }}>
          <Image
            src={team}
            alt="Logo"
            width={width > 700 ? 585 : 382}
            height={width > 700 ? 372 : 300}
            style={{
              position: "relative",
              top: width > 700 ? "-36px" : "0px",
              left: width > 700 ? "20px" : "17px",
            }}
          />
        </SectionImg>
        <SectionText className="invert-text">
          <Title>NOSSA VISÃO</Title>
          <Text>
            Ser reconhecido como um modelo de excelência na promoção do esporte
            como ferramenta de transformação social, inspirando e capacitando
            jovens a alcançar seu pleno potencial e contribuir positivamente
            para a sociedade.
          </Text>
        </SectionText>
      </SectionInfo>
      <SectionInfo>
        <SectionText>
          <Title>NOSSOS VALORES</Title>
          <Text>
            No Athletic Meriti, prezamos pela inclusão e respeito, promovendo a
            autodisciplina, a excelência e o comprometimento. Valorizamos a
            diversidade e fortalecemos a comunidade, proporcionando um ambiente
            onde todos possam crescer e se desenvolver integralmente.
          </Text>
        </SectionText>
        <SectionImg style={{ background: "#DD8934" }}>
          <Image
            src={coachs}
            alt="Logo"
            width={600}
            height={width > 700 ? 389 : 300}
            style={{
              position: "relative",
              top: width > 700 ? "-45px" : "-0px",
              left: width > 700 ? "0" : "10px",
            }}
          />
        </SectionImg>
      </SectionInfo>
      <SpanHowWeWork>Como trabalhamos</SpanHowWeWork>
      <SectionInfoWork className="column-reverse">
        <SectionImg
          style={{
            background: "#125492",
            width: width > 700 ? "630px" : "380px",
            height: "469px",
          }}
        >
          <Image
            src={team2}
            alt="Logo"
            width={width > 700 ? 519 : 382}
            height={width > 700 ? 519 : 382}
            style={{ position: "relative", top: "0px", left: "0px" }}
          />
        </SectionImg>
        <SectionText className="invert-text">
          <Title>EDUCAÇÃO ESPORTIVA</Title>
          <Text>
            Oferecemos treinamentos regulares de basquetebol para crianças,
            adolescentes e jovens, visando não apenas o desenvolvimento de
            habilidades esportivas, mas também a promoção de valores essenciais,
            como responsabilidade, persistência, ética de trabalho, resiliência,
            inclusão e cidadania.
          </Text>
          <SectionPartner>
            <Label>Parceiro da Educação</Label>
            <Image src={shellLogo} alt="Logo" width={200} height={120} />
          </SectionPartner>
        </SectionText>
      </SectionInfoWork>
      <SectionInfoWork>
        <SectionText>
          <Title>COMPETIÇÕES E CAMPEONATOS</Title>
          <Text>
            Participamos de competições desportivas que são essenciais para o
            desenvolvimento integral de nossos alunos, oferecendo a chance de
            aplicar habilidades e valores, superar obstáculos, trabalhar em
            equipe, lidar com pressão e aprender com vitórias e derrotas.
          </Text>
          <SectionPartner className="partner-invert">
            <Label>Parceiro de Competições</Label>
            <Image src={saoFranciscoLogo} alt="Logo" width={280} height={150} />
          </SectionPartner>
        </SectionText>
        <SectionImg
          style={{
            background: "#2C3F0E",
            width: width > 700 ? "630px" : "380px",
            height: "469px",
          }}
        >
          <Image
            src={team3}
            alt="Logo"
            width={width > 700 ? 519 : 382}
            height={width > 700 ? 519 : 382}
            style={{ position: "relative", top: "0px", left: "0px" }}
          />
        </SectionImg>
      </SectionInfoWork>
    </ContainerOurMission>
  );
};

export default OurMission;
