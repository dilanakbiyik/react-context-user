import React from 'react';
import { useStateValue } from '../../providers/StateProvider';
import {AppInterface, UserInterface} from "../../App";
import {createNewUser, updateAge, updateName} from "../../App.actions";

const Create = () => {
    const [state, dispatch] = useStateValue();
    const { users, newUser } = state as AppInterface;
    return (
        <div className="create">
            <div className="create-new">
                <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => dispatch(updateName(e.target.value))}/>
                <input type="number" placeholder="Age" value={newUser.age+""} onChange={(e) => dispatch(updateAge(parseInt(e.target.value)))}/>
                <button type="button"  onClick={() => dispatch(createNewUser())}>Create</button>
            </div>
            <div className="user-list">
                {users.map((user) => (
                    <div className="user-list-item">
                        <span>{user.name}</span>
                        <span>{user.age}</span>
                        <button type="button">Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Create;
