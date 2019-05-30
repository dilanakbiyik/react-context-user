import React from 'react';
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
    const { users, userInputs, page, isEdit } = state as AppInterface;
    if(page !== VIEW_AND_UPDATE_PAGE) return null;
    return (
        <div className="view-update">
            <div className="user-list">
                {users.length === 0 && (<p>There are no users to view and edit</p>)}
                {users.map((user, index) => (
                    <div className="user-list-item" key={`user-${index}`}>
                        <span>{user.name}</span>
                        <span>{user.age}</span>
                        <button type="button" onClick={() => dispatch(editUser(index, true))}>Edit</button>
                    </div>
                ))}
            </div>
            {isEdit && (
                <div className="edit-user">
                    <input type="text" placeholder="Name" value={userInputs.name} onChange={(e) => dispatch(updateName(e.target.value))}/>
                    <input type="number" placeholder="Age" value={userInputs.age+""} onChange={(e) => dispatch(updateAge(parseInt(e.target.value)))}/>
                    <button type="button" onClick={() => dispatch(updateUser())}>Update</button>
                </div>
            )}
            <ChangePage page={CREATE_PAGE}/>
        </div>
    );
}

export default ViewAndUpdate;
