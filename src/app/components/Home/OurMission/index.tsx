import {
  ContainerOurMission,
  SectionImg,
  SectionInfo,
  SectionText,
  Text,
  Title,
} from "./styles";
import Image from "next/image";
import player1 from "../../../assets/player1.png";
import player2 from "../../../assets/player2.png";
import player3 from "../../../assets/player3.png";
import team from "../../../assets/team.png";
import coachs from "../../../assets/coachs.png";

const OurMission: React.FC = () => {
  return (
    <ContainerOurMission>
      <SectionInfo>
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
          <Title>NOSSA MISSÃO</Title>
          <Text>
            Promover a inclusão social e o desenvolvimento integral de crianças
            e jovens carentes da comunidade através do basquete, proporcionando
            um ambiente seguro e estimulante que incentive a prática esportiva,
            a educação e a cidadania.
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
        <SectionImg>
          {/* <Image src={image} alt="Logo" width={309} height={309} />
            <Image src={image2} alt="Logo" width={309} height={309} />
            <Image src={image3} alt="Logo" width={309} height={309} /> */}
        </SectionImg>
      </SectionInfo>
      <SectionInfo>
        <SectionText>
          <Title>NOSSA MISSÃO</Title>
          <Text>
            Promover a inclusão social e o desenvolvimento integral de crianças
            e jovens carentes da comunidade através do basquete, proporcionando
            um ambiente seguro e estimulante que incentive a prática esportiva,
            a educação e a cidadania.
          </Text>
        </SectionText>
        <SectionImg>
          {/* <Image src={image} alt="Logo" width={309} height={309} />
            <Image src={image2} alt="Logo" width={309} height={309} />
            <Image src={image3} alt="Logo" width={309} height={309} /> */}
        </SectionImg>
      </SectionInfo>
    </ContainerOurMission>
  );
};

export default OurMission;
