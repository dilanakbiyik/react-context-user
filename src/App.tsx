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
    CHANGE_PAGE
} from "./App.actions";
import Create from "./components/Create/Create";
import ViewAndUpdate from "./components/ViewAndUpdate/ViewAndUpdate";

export interface UserInterface{
    name: string
    age: number
}

export interface AppInterface {
    users: UserInterface[],
    newUser: UserInterface,
    page: Page
}

const App = () => {
    const initialState: AppInterface = {
        users: [],
        newUser: {
            name: '',
            age: 0
        },
        page: CREATE_PAGE
    };

    const reducer = (state: AppInterface, action: AppAction) => {
        switch (action.type) {
            case INIT_APP:
                return state;
            case CHANGE_PAGE:
                return {
                    ...state,
                    page: action.payload.page
                };
            case UPDATE_NAME:
                return {
                    ...state,
                    newUser: {
                        ...state.newUser,
                        name: action.payload.name
                    }
                };
            case CREATE_NEW_USER:
                return {
                    ...state,
                    users: [
                        ...state.users,
                        state.newUser
                    ],
                    newUser: initialState.newUser
                };
            case UPDATE_AGE:
                return {
                    ...state,
                    newUser: {
                        ...state.newUser,
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
