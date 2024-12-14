import { Record } from "../interfaces/Record-Interface";

export const FindStatusByLast = async (data: Record[]): Promise<string> => {
  // Verifica se o array 'data' contém pelo menos um item
  if (data && data.length > 0) {
    // Acessa diretamente o status do primeiro (único) registro
    const status = data[0].Status; // Aqui acessamos o "Status"
    return status; // Retorna o status ou "Testando" caso esteja undefined ou falsy
  } else {
    return "Erro"; // Retorna "Testando" se 'data' estiver vazio ou undefined
  }
};
