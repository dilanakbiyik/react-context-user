import React from 'react';
import { useStateValue } from '../../providers/StateProvider';
import {AppInterface} from "../../App";
import {CREATE_PAGE, createNewUser, updateAge, updateName, VIEW_AND_UPDATE_PAGE} from "../../App.actions";
import ChangePage from "../ChangePage/ChangePage";

const ViewAndUpdate = () => {
    const [state, dispatch] = useStateValue();
    const { users, newUser, page } = state as AppInterface;
    if(page !== VIEW_AND_UPDATE_PAGE) return null;
    return (
        <div className="view-update">
            <div className="user-list">
                {users.map((user, index) => (
                    <div className="user-list-item">
                        <span>{user.name}</span>
                        <span>{user.age}</span>
                        <button type="button" onClick={() => dispatch(editUser())}>Edit</button>
                    </div>
                ))}
            </div>
            <div className="edit-user">
                <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => dispatch(updateName(e.target.value))}/>
                <input type="number" placeholder="Age" value={newUser.age+""} onChange={(e) => dispatch(updateAge(parseInt(e.target.value)))}/>
                <button type="button" onClick={() => dispatch(createNewUser())}>Create</button>
            </div>
            <ChangePage page={CREATE_PAGE}/>
        </div>
    );
}

export default ViewAndUpdate;
