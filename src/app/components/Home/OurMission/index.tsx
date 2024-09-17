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
import rodape from "../../../assets/rodape.png";

const OurMission: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <ContainerOurMission>
      <SectionInfo className="first-info">
        <SectionText>
          <Title>NOSSA MISSÃO</Title>
          <Text>
            Promover o acesso à educação, esporte e lazer para crianças,
            adolescentes e jovens na cidade de São João de Meriti, na região da
            Baixada Fluminense, transformando vidas e fortalecendo a comunidade.
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
              top: width > 700 ? "-65px" : "-65px",
              left: width > 700 ? "60px" : "-20px",
            }}
          />
          {width > 700 && (
            <Image
              src={player3}
              alt="player"
              width={380}
              height={430}
              style={{ position: "relative", top: "-65px", left: "-155px" }}
            />
          )}
        </SectionImg>
      </SectionInfo>
      <SectionInfo className="column-reverse">
        <SectionImg style={{ background: "#77BD10" }}>
          <Image
            src={team}
            alt="Logo"
            width={width > 700 ? 545 : 382}
            height={width > 700 ? 372 : 300}
            style={{
              position: "relative",
              top: width > 700 ? "-36px" : "0px",
              left: width > 700 ? "2px" : "17px",
            }}
          />
        </SectionImg>
        <SectionText className="invert-text">
          <Title>NOSSA VISÃO</Title>
          <Text>
            Ser um agente de transformação social por meio do esporte,
            promovendo o acesso à educação e ao lazer como direitos
            fundamentais, capacitando crianças, adolescentes e jovens de São
            João de Meriti e da Baixada Fluminense para um futuro melhor.
          </Text>
        </SectionText>
      </SectionInfo>
      <SectionInfo
        style={{
          height: width > 768 ? 620 : width <= 425 ? 500 : 550,
          justifyContent: width > 425 ? "space-around" : "flex-start",
          marginTop: width > 768 ? "0" : "-20px",
        }}
      >
        <SectionText>
          <Title>NOSSOS VALORES</Title>
          <Text id="values-text" style={{ width: "100%" }}>
            1. Inclusão Social: Promover a inclusão social de crianças,
            adolescentes e jovens, independentemente de sua origem
            socioeconômica, gênero ou origem étnica, por meio do esporte e da
            educação.
            <br /> 2. Integridade: Atuar com ética e integridade, garantindo que
            todas as atividades e parcerias estejam alinhadas com os princípios
            de transparência e responsabilidade.
            <br /> 3. Comprometimento com a Comunidade: Demonstrar compromisso
            sólido e contínuo com as comunidades insertas em São João de Meriti
            e da Baixada Fluminense, buscando ativamente melhorar a qualidade de
            vida das pessoas da região.
          </Text>
        </SectionText>
        <SectionImg
          style={{
            background: "#DD8934",
            display: width > 768 ? "flex" : "none",
            marginTop: width > 768 ? "100px" : "0px",
          }}
        >
          <Image
            src={coachs}
            alt="Logo"
            width={500}
            height={width > 700 ? 359 : 300}
            style={{
              display: width > 768 ? "flex" : "none",
              position: "relative",
              top: width > 700 ? "-30px" : "-0px",
              left: width > 700 ? "0" : "10px",
            }}
          />
        </SectionImg>
      </SectionInfo>
      <SpanHowWeWork>Nossos programas</SpanHowWeWork>
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
          <Title>ESPORTIVA EDUCACIONAL</Title>
          <Text style={{ width: "100%" }}>
            A Athletic Meriti alcançou um marco importante com a aprovação na
            Lei Federal de Incentivo ao Esporte, que permitiu a captação de
            recursos para fortalecer nosso programa. Oferecemos treinamentos de
            basquete para crianças, adolescentes e jovens, promovendo o
            desenvolvimento de habilidades esportivas e valores como
            responsabilidade, ética, resiliência e inclusão.
          </Text>
          <SectionPartner>
            {/* <Label>Patrocinador Master</Label>
            <Image src={shellLogo} alt="Logo" width={180} height={180} /> */}
          </SectionPartner>
        </SectionText>
      </SectionInfoWork>
      <SectionInfoWork>
        <SectionText>
          <Title>COMPETIÇÕES ESPORTIVAS</Title>
          <Text style={{ width: "100%" }}>
            Participamos de competições, como a Liga Super Basketball, que reúne
            mais de 150 equipes do estado do Rio de Janeiro. Competimos nas
            categorias sub-12, sub-14, sub-16, sub-18 e adulto. Esses eventos
            oferecem aos nossos alunos a chance de aplicar suas habilidades e
            valores, além de promover o crescimento pessoal e o amadurecimento
            emocional.
          </Text>
          <SectionPartner className="partner-invert">
            {/* <Label>Patrocinador Master</Label>
            <Image src={saoFranciscoLogo} alt="Logo" width={280} height={150} /> */}
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
      <Image
        src={rodape}
        alt="Logo"
        style={{ width: width > 1024 ? 1080 : 700 }}
      />
    </ContainerOurMission>
  );
};

export default OurMission;
