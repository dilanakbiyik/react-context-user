import React from 'react';
import { StateProvider } from './providers/StateProvider';
import {
    INIT_APP,
    AppAction,
    UPDATE_NAME,
    UPDATE_AGE,
    CREATE_NEW_USER,
    Page,
    CREATE_PAGE,
    CHANGE_PAGE, EDIT_USER, UPDATE_USER
} from "./App.actions";
import Create from "./components/Create/Create";
import ViewAndUpdate from "./components/ViewAndUpdate/ViewAndUpdate";

export interface UserInterface{
    name: string
    age: number
}

export interface AppInterface {
    users: UserInterface[],
    userInputs: UserInterface,
    page: Page,
    isEdit: boolean,
    selectedUserIndex: number
}

const App = () => {
    const initialState: AppInterface = {
        users: [],
        userInputs: {
            name: '',
            age: 0
        },
        page: CREATE_PAGE,
        isEdit: false,
        selectedUserIndex: -1
    };

    const reducer = (state: AppInterface, action: AppAction) => {
        switch (action.type) {
            case INIT_APP:
                return state;
            case CHANGE_PAGE:
                return {
                    ...state,
                    userInputs: initialState.userInputs,
                    page: action.payload.page
                };
            case UPDATE_NAME:
                return {
                    ...state,
                    userInputs: {
                        ...state.userInputs,
                        name: action.payload.name
                    }
                };
            case CREATE_NEW_USER:
                return {
                    ...state,
                    users: [
                        ...state.users,
                        state.userInputs
                    ],
                    userInputs: initialState.userInputs
                };
            case EDIT_USER:
                return {
                    ...state,
                    userInputs: action.payload.index > -1 ? state.users[action.payload.index] : initialState.userInputs,
                    isEdit: action.payload.isEdit,
                    selectedUserIndex: action.payload.index
                };
            case UPDATE_USER:
                state.users[state.selectedUserIndex] = state.userInputs;
                return {
                    ...state,
                    users: [...state.users],
                    isEdit: false,
                    selectedUserIndex: initialState.selectedUserIndex,
                    userInputs: initialState.userInputs
                };
            case UPDATE_AGE:
                return {
                    ...state,
                    userInputs: {
                        ...state.userInputs,
                        age: action.payload.age
                    }
                };
            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Create/>
            <ViewAndUpdate/>
        </StateProvider>
    );
}

export default App;
