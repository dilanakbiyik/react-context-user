import React from 'react';
import { useStateValue } from '../../providers/StateProvider';
import {UserInterface} from "../../App";

const Create = () => {
    const [{ users }, dispatch] = useStateValue();
    return (
        <div className="creae">
            {users.map((user: UserInterface) => <span>{user.name}</span> )}
        </div>
    );
}

export default Create;
