import { Setor } from "./Setor";
import { Unidade } from "./Unidade";

export type Solicitacao = {
    id: number,
    nomeSolicitante: string,
    email: string,
    telefone: string,
    siape: string,
    dataSolicitacao: Date,
    local: string;
    midia?: string,
    descricao: string,
    servico: string,
    unidade: Unidade,
    setor: Setor,
    //ordemServico: OrdemServico,
}

export type SolicitacaoCreateDto = {
    nomeSolicitante: string,
    email: string,
    telefone: string,
    siape: string,
    local: string;
    midia?: string,
    descricao: string,
    servico: string,
    unidade: number,
    setor: number,
}