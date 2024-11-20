import { Unidade } from '@/models/Unidade';
import api from './api';

const resource = '/unidade';

export default {
    get() {
        return api.get<Unidade[]>(resource);
    }
}

//TODO: Remove this:
export const mockUnidades: Unidade[] = [
    {id: 1, nome: 'Campus Arapiraca'},
    {id: 2, nome: 'Polo Palmeira'},
    {id: 3, nome: 'Polo Penedo'},
]