// Entrys.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import EntryCard from "./EntryCard";
import EditForm from "./EditForm";

interface ProjectEntry {
  proponente: string;
  fonteDeRecursos: string;
  valorDoProjeto: number;
  status: string;
  inicio: string;
  fim: string;
  local: string;
  numeroDeBeneficiarios: number;
  modalidadeEManifestacao: string;
  empresasParceiras: string;
  descricao: string;
  imagem?: string;
  type: "Projeto";
  _id: string;
}

interface QuotationEntry {
  proponente: string;
  valorDoProjeto: number;
  status: string;
  inicio: string;
  fim: string;
  descricao: string;
  type: "Cotação";
  _id: string;
}

const Entrys: React.FC = () => {
  const [projects, setProjects] = useState<ProjectEntry[]>([]);
  const [quotations, setQuotations] = useState<QuotationEntry[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState<
    ProjectEntry | QuotationEntry | null
  >(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/projetos")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/quotacoes")
      .then((response) => {
        setQuotations(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the quotations!", error);
      });
  }, []);

  const handleDelete = (_id: string, type: "Projeto" | "Cotação") => {
    const url =
      type === "Projeto"
        ? `http://localhost:4000/projetos/${_id}`
        : `http://localhost:4000/quotacoes/${_id}`;
    axios
      .delete(url)
      .then((response) => {
        console.log(response.data);
        // Remover o item do estado local
        if (type === "Projeto") {
          setProjects((prevProjects) =>
            prevProjects.filter((project) => project._id !== _id)
          );
        } else {
          setQuotations((prevQuotations) =>
            prevQuotations.filter((quotation) => quotation._id !== _id)
          );
        }
      })
      .catch((error) => {
        console.error("There was an error deleting the entry!", error);
      });
  };

  const handleEdit = (entry: ProjectEntry | QuotationEntry) => {
    setEditMode(true);
    setEditData(entry);
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (editData) {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    }
  };

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editData) {
      const url =
        editData.type === "Projeto"
          ? `http://localhost:4000/projetos/${editData._id}`
          : `http://localhost:4000/quotacoes/${editData._id}`;
      axios
        .put(url, editData)
        .then((response) => {
          console.log(response.data);
          setEditMode(false);
          setEditData(null);
          // Atualizar a lista de itens
          if (editData.type === "Projeto") {
            setProjects((prevProjects) =>
              prevProjects.map((project) =>
                project._id === editData._id ? response.data : project
              )
            );
          } else {
            setQuotations((prevQuotations) =>
              prevQuotations.map((quotation) =>
                quotation._id === editData._id ? response.data : quotation
              )
            );
          }
        })
        .catch((error) => {
          console.error("There was an error updating the entry!", error);
        });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "40px",
      }}
    >
      {editMode && editData ? (
        <EditForm
          data={editData}
          onChange={handleEditChange}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <>
          <h1>Lançamentos</h1>
          {projects.map((project) => (
            <EntryCard
              key={project._id}
              _id={project._id}
              proponente={project.proponente}
              status={project.status}
              type={project.type}
              onDelete={() => handleDelete(project._id, "Projeto")}
              onEdit={() => handleEdit(project)}
            />
          ))}
          {quotations.map((quotation) => (
            <EntryCard
              key={quotation._id}
              _id={quotation._id}
              proponente={quotation.proponente}
              status={quotation.status}
              type={quotation.type}
              onDelete={() => handleDelete(quotation._id, "Cotação")}
              onEdit={() => handleEdit(quotation)}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Entrys;
