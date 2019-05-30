import React from 'react';
import { StateProvider } from './providers/StateProvider';
import {INIT_APP, AppAction} from "./App.actions";
import Create from "./components/Create/Create";

export interface UserInterface{
    name: string
    age: number
}

export interface AppInterface {
    users: UserInterface[]
}

const App = () => {
    const initialState: AppInterface = {
        users: []
    };

    const reducer = (state: AppInterface, action: AppAction) => {
        switch (action.type) {
            case INIT_APP:
                return state;
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
