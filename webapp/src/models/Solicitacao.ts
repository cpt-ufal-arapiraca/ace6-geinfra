// import { Setor } from "./Setor";
// import { Unidade } from "./Unidade";

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
    unidade: number, //TODO: substituir pelo tipo Unidade
    setor: number, //TODO: substituir pelo tipo Setor
    status?: 'ENVIADA' | 'REJEITADA' | 'EM_PROGRESSO' | 'CONCLUIDA', //TODO: verificar e ajustar quais serão os status. Valores apenas de teste
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

// export type SolicitacaoGetDto = {
//     nomeSolicitante: string,
//     email: string,
//     telefone: string,
//     siape: string,
//     local: string;
//     midia?: string,
//     descricao: string,
//     servico: string,
//     unidade: number,
//     setor: number,
// }