import { Solicitacao, SolicitacaoCreateDto } from '@/models/Solicitacao';
import api from './api';

const resource = '/solicitacao';

export default {
    post(solicitacao: SolicitacaoCreateDto) {
        return api.post<SolicitacaoCreateDto>(resource, solicitacao);
    },

    get() {
        return api.get<Solicitacao[]>(resource);
    }
}