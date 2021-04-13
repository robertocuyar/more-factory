import {genClients} from "../util/genClients";

export const defaultUser = {
    currency: 0,
    tier: 1,
    clients: genClients([], 1)
}