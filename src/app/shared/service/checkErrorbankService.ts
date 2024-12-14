import api from "../../api/api";
import { FindStatusByLast } from "./FindStatusService";
import { Record } from "../interfaces/Record-Interface";

export const checkErrorbank = async (namebank: string): Promise<string> => {
  // Aguarda as respostas das APIs
  const responseApi = await api.get(`registro/${namebank}?filter=LAST`);
  const responseApi2 = await api.get(`consulta/${namebank}?filter=LAST`);
  // Atribui os dados das respostas
  const Registro: Record[] = responseApi.data;
  const Consulta: Record[] = responseApi2.data;
  console.log(Consulta);
  // Verifica os status
  const statusRegistro = await FindStatusByLast(Registro);
  const statusConsulta = await FindStatusByLast(Consulta);

  // console.log(`banco:${namebank} - registro: ${statusRegistro}`);
  console.log(`banco:${namebank} - consulta: ${statusConsulta}`);
  // Verifica se algum dos status é "inativo"
  if (statusConsulta === "inativo" || statusRegistro === "inativo") {
    return "Offline";
  } else {
    return "Online";
  }
};
