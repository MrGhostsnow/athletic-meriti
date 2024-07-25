import Image from "next/image";
import {
  Card,
  Header,
  Title,
  Type,
  Status,
  SectionStatus,
  SectionTitle,
} from "./styles";
import trashIcon from "../../../assets/trash-icon.png";

interface IEntryProps {
  proponente: string;
  status: string;
  type?: "Projeto" | "Cotação";
  onDelete: () => void;
  onEdit: () => void;
  _id: string;
}

const EntryCard: React.FC<IEntryProps> = ({
  proponente,
  status,
  type,
  onDelete,
  onEdit,
  _id,
}) => {
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
          <Image
            src={trashIcon}
            alt="delete"
            width={25}
            height={25}
            onClick={onDelete}
          />
          <p
            style={{
              cursor: "pointer",
              fontFamily: "Inter sans-serif",
              color: "#0921F8",
              fontSize: "18px",
              fontWeight: "600",
              borderBottom: "1px solid #0921F8",
            }}
            onClick={onEdit}
          >
            editar
          </p>
        </SectionStatus>
      </Header>
    </Card>
  );
};

export default EntryCard;
