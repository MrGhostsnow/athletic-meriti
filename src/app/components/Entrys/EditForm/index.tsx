import React from "react";
import {
  FormContainer,
  SectionInput,
  Label,
  Input,
  Button,
  SectionInputRow,
  Select,
} from "./styles";

interface ProjectEntryProps {
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
  type: string;
  _id: string;
}

interface QuotationEntryProps {
  proponente: string;
  valorDoProjeto: number;
  status: string;
  inicio: string;
  fim: string;
  descricao: string;
  type: string;
  _id: string;
  fonteDeRecursos?: string;
  imagem?: string;
  numeroDeBeneficiarios?: number;
  local?: string;
  modalidadeEManifestacao?: string;
  empresasParceiras?: string;
}

interface EditFormProps {
  data: ProjectEntryProps | QuotationEntryProps;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({
  data,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <h2>Editar {data.type}</h2>
        <SectionInput>
          <Label>Proponente</Label>
          <Input
            type="text"
            name="proponente"
            value={data.proponente}
            onChange={onChange}
          />
        </SectionInput>
        {data.type === "Projeto" && (
          <SectionInput>
            <Label>Fonte de Recursos</Label>
            <Input
              type="text"
              name="fonteDeRecursos"
              value={data.fonteDeRecursos}
              onChange={onChange}
            />
          </SectionInput>
        )}

        <SectionInputRow>
          <SectionInput>
            <Label>Valor do Projeto</Label>
            <Input
              type="number"
              name="valorDoProjeto"
              value={data.valorDoProjeto}
              onChange={onChange}
            />
          </SectionInput>
          <SectionInput>
            <Label>Status</Label>
            <Select name="status" value={data.status} onChange={onChange}>
              <option value="aberto">Aberto</option>
              <option value="encerrado">Encerrado</option>
            </Select>
          </SectionInput>
        </SectionInputRow>
        <SectionInputRow>
          <SectionInput>
            <Label>Início</Label>
            <Input
              type="date"
              name="início"
              value={data.inicio}
              onChange={onChange}
            />
          </SectionInput>
          <SectionInput>
            <Label>Fim</Label>
            <Input
              type="date"
              name="fim"
              value={data.fim}
              onChange={onChange}
            />
          </SectionInput>
        </SectionInputRow>
        {data.type === "Projeto" && (
          <>
            <SectionInput>
              <Label>Local</Label>
              <Input
                type="text"
                name="local"
                value={data.local}
                onChange={onChange}
              />
            </SectionInput>
            <SectionInputRow>
              <SectionInput>
                <Label>Numero de Beneficiários</Label>
                <Input
                  type="number"
                  name="numeroDeBeneficiarios"
                  value={data.numeroDeBeneficiarios}
                  onChange={onChange}
                />
              </SectionInput>
              <SectionInput>
                <Label>Modalidade e Manifestação</Label>
                <Input
                  type="text"
                  name="modalidadeEManifestacao"
                  value={data.modalidadeEManifestacao}
                  onChange={onChange}
                />
              </SectionInput>
            </SectionInputRow>
            <SectionInput>
              <Label>Empresas Parceiras</Label>
              <Input
                type="text"
                name="empresasParceiras"
                value={data.empresasParceiras}
                onChange={onChange}
              />
            </SectionInput>
          </>
        )}

        <SectionInput>
          <Label>Descrição</Label>
          <Input
            type="text"
            name="descricao"
            value={data.descricao}
            onChange={onChange}
          />
        </SectionInput>
        {data.type === "Projeto" && (
          <SectionInput>
            <Label>Imagem</Label>
            <Input
              type="text"
              name="imagem"
              value={data.imagem}
              onChange={onChange}
            />
          </SectionInput>
        )}
        <Button type="submit">Save</Button>
        <Button
          type="button"
          style={{ backgroundColor: "red" }}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </form>
    </FormContainer>
  );
};

export default EditForm;
