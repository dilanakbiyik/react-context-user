import React from 'react';
import { StateProvider } from './providers/StateProvider';
import {INIT_APP, AppAction, UPDATE_NAME, UPDATE_AGE, CREATE_NEW_USER} from "./App.actions";
import Create from "./components/Create/Create";

export interface UserInterface{
    name: string
    age: number
}

export interface AppInterface {
    users: UserInterface[],
    newUser: UserInterface
}

const App = () => {
    const initialState: AppInterface = {
        users: [],
        newUser: {
            name: '',
            age: 0
        }
    };

    const reducer = (state: AppInterface, action: AppAction) => {
        switch (action.type) {
            case INIT_APP:
                return state;
            case UPDATE_NAME:
                return {
                    ...state,
                    newUser: {
                        ...state.newUser,
                        name: action.payload.name
                    }
                };
            case CREATE_NEW_USER:
                console.log("hree")
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
        </StateProvider>
    );
}

export default App;
