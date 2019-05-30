import React from 'react';
import './ViewAndUpdate.css'
import { useStateValue } from '../../providers/StateProvider';
import {AppInterface} from "../../App";
import {
    CREATE_PAGE,
    editUser,
    updateAge,
    updateName,
    updateUser,
    VIEW_AND_UPDATE_PAGE
} from "../../App.actions";
import ChangePage from "../ChangePage/ChangePage";

const ViewAndUpdate = () => {
    const [state, dispatch] = useStateValue();
    const { users, userInputs, page, isEdit, selectedUserIndex } = state as AppInterface;
    if(page !== VIEW_AND_UPDATE_PAGE) return null;
    return (
        <div className="view-update">
            <div className="user-list">
                <h3>User List</h3>
                {users.length === 0 && (<p>There are no users to view and edit</p>)}
                {users.map((user, index) => (
                    <div className="user-list-item" key={`user-${index}`}>
                        <div>{user.name}</div>
                        <div>{user.age}</div>
                        {selectedUserIndex !== index ? (
                            <button type="button" onClick={() => dispatch(editUser(index, true))}>Edit</button>
                            ) : <button className="cancel" type="button" onClick={() => dispatch(editUser(-1, false))}>Cancel</button>
                        }
                    </div>
                ))}
            </div>
            {isEdit && (
                <div className="edit-user">
                    <div className="input-area">
                        <input type="text" placeholder="Name" value={userInputs.name} onChange={(e) => dispatch(updateName(e.target.value))}/>
                    </div>
                    <div className="input-area">
                        <input type="text" placeholder="Age" value={userInputs.age} onChange={(e) => dispatch(updateAge(e.target.value))}/>
                    </div>
                    <button type="button" onClick={() => dispatch(updateUser())}>Update</button>
                </div>
            )}
            <ChangePage page={CREATE_PAGE}/>
        </div>
    );
}

export default ViewAndUpdate;
