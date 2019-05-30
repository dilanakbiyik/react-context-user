import {UserInterface} from "./App";

export const INIT_APP = 'INIT_APP';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_AGE = 'UPDATE_AGE';
export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const EDIT_USER = 'EDIT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const CREATE_PAGE = 'CREATE_PAGE';
export const VIEW_AND_UPDATE_PAGE = 'VIEW_AND_UPDATE_PAGE';
const PAGES = [CREATE_PAGE, VIEW_AND_UPDATE_PAGE];

export type Page = typeof PAGES[number]

export interface InitAppAction {
    type: typeof INIT_APP
    payload: {
        userInputs: UserInterface
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

export interface ChangePageAction {
    type: typeof CHANGE_PAGE
    payload: {
        page: Page
    }
}
export interface EditUserAction {
    type: typeof EDIT_USER
    payload: {
        isEdit: boolean,
        index: number
    }
}
export interface UpdateUserAction {
    type: typeof UPDATE_USER
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
export const changePage = (page: Page): ChangePageAction => ({
    type: CHANGE_PAGE,
    payload: {
        page
    }
});
export const editUser = (index: number, isEdit: boolean): EditUserAction => ({
    type: EDIT_USER,
    payload: {
        isEdit,
        index
    }
});
export const updateUser = (): UpdateUserAction => ({
    type: UPDATE_USER
});

export type AppAction = InitAppAction
    | UpdateNameAction
    | UpdateAgeAction
    | CreateNewUserAction
    | ChangePageAction
    | EditUserAction
    | UpdateUserAction

