import { format } from "date-fns";

export const formatDate = (date) => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Data inválida";
  }

  return format(parsedDate, "dd/MM/yyyy");
};
