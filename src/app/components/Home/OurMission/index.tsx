import {
  ContainerOurMission,
  SectionImg,
  SectionInfo,
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

const OurMission: React.FC = () => {
  return (
    <ContainerOurMission>
      <SectionInfo style={{ marginTop: "100px" }}>
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
            width={320}
            height={350}
            style={{ position: "relative", top: "-20px", left: "110px" }}
          />
          <Image
            src={player2}
            alt="player"
            width={309}
            height={389}
            style={{ position: "relative", top: "-80px", left: "60px" }}
          />
          <Image
            src={player3}
            alt="player"
            width={369}
            height={389}
            style={{ position: "relative", top: "-80px", left: "-135px" }}
          />
        </SectionImg>
      </SectionInfo>
      <SectionInfo>
        <SectionImg style={{ background: "#77BD10" }}>
          <Image
            src={team}
            alt="Logo"
            width={549}
            height={309}
            style={{ position: "relative", top: "-41px", left: "10px" }}
          />
        </SectionImg>
        <SectionText
          style={{
            textAlign: "right",
          }}
        >
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
            width={550}
            height={339}
            style={{ position: "relative", top: "-55px", left: "0px" }}
          />
        </SectionImg>
      </SectionInfo>
      <SpanHowWeWork>Como trabalhamos</SpanHowWeWork>
      <SectionInfo style={{ height: "650px" }}>
        <SectionImg
          style={{ background: "#125492", width: "630px", height: "489px" }}
        >
          <Image
            src={team2}
            alt="Logo"
            width={559}
            height={559}
            style={{ position: "relative", top: "0px", left: "0px" }}
          />
        </SectionImg>

        <SectionText
          style={{
            textAlign: "right",
          }}
        >
          <Title>EDUCAÇÃO ESPORTIVA</Title>
          <Text>
            Oferecemos treinamentos regulares de basquetebol para crianças,
            adolescentes e jovens, visando não apenas o desenvolvimento de
            habilidades esportivas, mas também a promoção de valores essenciais,
            como responsabilidade, persistência, ética de trabalho, resiliência,
            inclusão e cidadania.
          </Text>
          <SectionPartner>
            <Label
              style={{
                textAlign: "left",
              }}
            >
              Parceiro da Educação
            </Label>
            <Image src={shellLogo} alt="Logo" width={200} height={120} />
          </SectionPartner>
        </SectionText>
      </SectionInfo>
      <SectionInfo style={{ height: "650px" }}>
        <SectionText>
          <Title>COMPETIÇÕES E CAMPEONATOS</Title>
          <Text>
            Participamos de competições desportivas que são essenciais para o
            desenvolvimento integral de nossos alunos, oferecendo a chance de
            aplicar habilidades e valores, superar obstáculos, trabalhar em
            equipe, lidar com pressão e aprender com vitórias e derrotas.
          </Text>
          <SectionPartner>
            <Label>Parceiro de Competições</Label>
            <Image src={saoFranciscoLogo} alt="Logo" width={280} height={150} />
          </SectionPartner>
        </SectionText>
        <SectionImg
          style={{ background: "#2C3F0E", width: "630px", height: "489px" }}
        >
          <Image
            src={team3}
            alt="Logo"
            width={559}
            height={559}
            style={{ position: "relative", top: "0px", left: "0px" }}
          />
        </SectionImg>
      </SectionInfo>
    </ContainerOurMission>
  );
};

export default OurMission;
