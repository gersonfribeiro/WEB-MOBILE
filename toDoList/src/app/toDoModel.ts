export interface toDoModel {
  id: number;
  responsaveis: string[];
  urgencia: 'BAIXA' | 'MEDIA' | 'ALTA' | 'PRIORIDADE';
  status: 'PENDENTE' | 'EM EXECUÇÃO' | 'REVISÃO PENDENTE' | 'CONCLUÍDA' | 'APROVADA' | 'CANCELADA';
  titulo: string;
  descricao: string;
  previsaoEntrega: Date;
  dataInicio: Date;
  dataEntrega: Date;
}
