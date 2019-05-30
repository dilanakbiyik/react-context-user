import React from 'react';
import './Create.css'
import { useStateValue } from '../../providers/StateProvider';
import {AppInterface} from "../../App";
import {CREATE_PAGE, createNewUser, updateAge, updateName, VIEW_AND_UPDATE_PAGE} from "../../App.actions";
import ChangePage from "../ChangePage/ChangePage";

const Create = () => {
    const [state, dispatch] = useStateValue();
    const { userInputs, page, isNew, users } = state as AppInterface;
    if(page !== CREATE_PAGE) return null;
    return (
        <div className="create">
            <div className="create-new">
                <h3>Create New User</h3>
                <div className="input-area">
                    <input type="text" placeholder="Name" value={userInputs.name} onChange={(e) => dispatch(updateName(e.target.value))}/>
                </div>
                <div className="input-area">
                    <input type="text" placeholder="Age" value={userInputs.age} onChange={(e) => dispatch(updateAge(e.target.value))}/>
                </div>
                <button type="button" onClick={() => dispatch(createNewUser())}>Create</button>

                {isNew && (
                    <p>User <b>{users[users.length - 1].name}, {users[users.length - 1].age}</b> has been created!</p>
                )}
            </div>
            <ChangePage page={VIEW_AND_UPDATE_PAGE}/>
        </div>
    );
};

export default Create;
