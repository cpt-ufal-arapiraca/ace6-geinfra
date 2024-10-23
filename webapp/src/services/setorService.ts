import { Setor } from '@/models/Setor';
import api from './api';

const resource = '/setor';

export default {
    get() {
        return api.get<Setor[]>(resource);
    }
}

//TODO: Remove this:
export const mockSetores: Setor[] = [
    {id: 1, nome: 'Setor A'},
    {id: 2, nome: 'Setor B'},
    {id: 3, nome: 'Setor C'},
]