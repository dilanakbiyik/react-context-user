import {UserInterface} from "./App";

export const INIT_APP = 'INIT_APP';

export interface InitAppAction {
    type: typeof INIT_APP
    payload: {
        users: UserInterface[]
    }
}
export type AppAction = InitAppAction
