// AgendaStore.ts
import { observable, action } from 'mobx';

import { AgendaItem } from "models/agenda";

import * as AgendaMocks from "mocks/agendaMocks";

class AgendaStore {
    @observable agendaItems: AgendaItem[];

    constructor() {
        this.loadAgenda();
    }

    @action loadAgenda() {
        this.agendaItems = AgendaMocks.agendaItems;
    }
}

export const agendaStore = new AgendaStore();
export default agendaStore;
