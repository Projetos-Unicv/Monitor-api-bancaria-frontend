export interface Record {
  id: number;
  Tipo: string;
  status: string;
  CodigoDaResposta: number;
  HoraDaConsulta: string;
  TempoDeResposta: string;
  payloadResponse: object[];
  Detalhamento: string;
  StatusDaResposta: string;
}
