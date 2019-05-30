import {UserInterface} from "./App";

export const INIT_APP = 'INIT_APP';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_AGE = 'UPDATE_AGE';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';

export interface InitAppAction {
    type: typeof INIT_APP
    payload: {
        newUser: UserInterface
        users: UserInterface[]
    }
}

export interface UpdateNameAction {
    type: typeof UPDATE_NAME
    payload: {
        name: string
    }
}
export interface UpdateAgeAction {
    type: typeof UPDATE_AGE
    payload: {
        age: number
    }
}

export interface CreateNewUserAction {
    type: typeof CREATE_NEW_USER
}

export const updateName = (name: string): UpdateNameAction => ({
    type: UPDATE_NAME,
    payload: {
        name
    },
});
export const updateAge = (age: number): UpdateAgeAction => ({
    type: UPDATE_AGE,
    payload: {
        age
    },
});
export const createNewUser = (): CreateNewUserAction => ({
    type: CREATE_NEW_USER
});

export type AppAction = InitAppAction | UpdateNameAction | UpdateAgeAction | CreateNewUserAction
