import { Record } from "../interfaces/Record-Interface";

export const FindStatusByLast = async (data: Record[]): Promise<string> => {
  const last = data.pop();
  const lete = last?.status;
  return lete || "Testando";
};
