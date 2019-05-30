import React from 'react';
import { useStateValue } from '../../providers/StateProvider';
import {AppInterface} from "../../App";
import {changePage, CREATE_PAGE, createNewUser, updateAge, updateName, VIEW_AND_UPDATE_PAGE} from "../../App.actions";
import ChangePage from "../ChangePage/ChangePage";

const Create = () => {
    const [state, dispatch] = useStateValue();
    const { userInputs, page } = state as AppInterface;
    if(page !== CREATE_PAGE) return null;
    return (
        <div className="create">
            <div className="create-new">
                <input type="text" placeholder="Name" value={userInputs.name} onChange={(e) => dispatch(updateName(e.target.value))}/>
                <input type="number" placeholder="Age" value={userInputs.age+""} onChange={(e) => dispatch(updateAge(parseInt(e.target.value)))}/>
                <button type="button" onClick={() => dispatch(createNewUser())}>Create</button>
            </div>
            <ChangePage page={VIEW_AND_UPDATE_PAGE}/>
        </div>
    );
}

export default Create;
